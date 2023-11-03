const Property = require('../models/Property');
async function getAll(query) {
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