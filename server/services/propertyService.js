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
}
async function getByUserId(userId) {
}
async function createProperty(data) {
    return await Property.create(data);
}
async function updateProperty(id, data) {
}
async function bid(id, userId, newPrice) {
}
async function deleteProperty(id) {

async function getOwn(userId) {
}

module.exports = { getAll, getById, getByUserId, createProperty, updateProperty, bid, deleteProperty, getOwn };