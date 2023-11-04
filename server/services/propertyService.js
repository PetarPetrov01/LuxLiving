const Property = require('../models/Property');

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

    if (query.sort) {
        return Property.find(search)
            .sort(query.sort)
            .limit(query.limit);
    }

    return Property.find(search)
        .limit(query.limit);
}

async function getById(id) {
    const prop = await Property.findById(id).populate('currentBidder');
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
    return { ownPosts, ownBids };
}

module.exports = { getAll, getById, getByUserId, createProperty, updateProperty, bid, deleteProperty, getOwn };