const Property = require('../models/Property');
const Review = require('../models/Review');

async function getAll(query) {
    let search = {};

    if (query.search) {
        search = {
            $or: [
                { name: { $regex: new RegExp(query.search, 'i') } },
                { location: { $regex: new RegExp(query.search, 'i') } }
            ]
        };
    }

    let properties = Property.find(search);

    if (query.sort) {
        properties = properties.sort(query.sort);
    }

    const page = parseInt(query.page) || 1;
    const limit = parseInt(query.limit) || 5;
    const propertiesCount = await Property.countDocuments(search);
    const pageCount = Math.ceil(propertiesCount / limit) || 1;

    if (pageCount != 0 && page > pageCount || page < 1) {
        throw new Error('This page does not exist');
    }

    properties = properties
        .skip((page - 1) * limit)
        .limit(limit);

    const pages = {
        pageCount,
        previous: page > 1 && pageCount > 1,
        next: page < pageCount
    };

    return {
        pages,
        data: await properties
    };
}

async function getById(id) {
    const prop = await Property.findById(id)
        .select('-__v')
        .populate({
            path: 'currentBidder',
            select: '_id email'
        })
        .populate({
            path: 'reviews',
            populate: {
                path: '_ownerId',
                select: '_id email'
            },
            options: { sort: { createdAt: -1 } }
        });
    return prop;
}

async function getByUserId(userId) {
    return Property.find({ _ownerId: userId });
}

async function createProperty(data) {
    return await Property.create(data);
}

async function updateProperty(id, data) {
    const property = await Property.findById(id);

    if (property.currentBidder && property.price > data.price) {
        throw new Error('You can\'t lower the price after someone has bid');
    }

    property.name = data.name;
    property.location = data.location;
    property.area = Number(data.area);
    property.imageUrl = data.imageUrl;
    property.description = data.description;
    property.price = Number(data.price);

    return await property.save();
}

async function bid(id, userId, newPrice) {
    const property = await Property.findById(id);

    if (property.price != newPrice) {
        throw new Error('You can\'t edit the price, once a bid is placed!');
    }

    if (property._ownerId == userId) {
        throw new Error('You can\'t bid on your own post!');
    }

    property.price = newPrice;
    property.currentBidder = userId;

    await property.save();
}

async function deleteProperty(id) {
    return Property.findByIdAndDelete(id);
}

async function getOwn(userId) {
    const ownPosts = await Property.find({ _ownerId: userId });
    const ownBids = await Property.find({ currentBidder: userId });
    const ownReviews = await Review.find({ _ownerId: userId }).populate({
        path: '_propertyId',
        select: 'name location _id imageUrl'
    });
    return { ownPosts, ownBids, ownReviews };
}

module.exports = { getAll, getById, getByUserId, createProperty, updateProperty, bid, deleteProperty, getOwn };