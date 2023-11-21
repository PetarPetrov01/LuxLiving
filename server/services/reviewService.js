const Property = require('../models/Property');
const Review = require('../models/Review');

async function getById(reviewId) {
    const review = Review.findById(reviewId);
    return review;
}
async function createReview(propId, userId, data) {
    const property = await Property.findById(propId).populate('reviews');
    if (userId == property._ownerId) {
        throw new Error('You can\'t write a review for your own post');
    }
    if (property.reviews.length > 0 && property.reviews.some(rev => rev._ownerId == userId)) {
        throw new Error('You already have a review for this post');
    }

    data._ownerId = userId;
    data._propertyId = propId;
    const review = await Review.create(data);

    property.reviews.push(review._id);

    await property.save();
    return {
        newRating: property.rating,
        review
    };
}

async function deleteReview(propId, reviewId) {
}
module.exports = {
    getById,
    createReview,
    deleteReview
};
