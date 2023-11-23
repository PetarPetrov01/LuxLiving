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

    if (property.reviews.length > 0) {
        const oldSum = property.reviews.reduce((acc, b) => acc + b.rating, 0);
        const newRating = (oldSum + review.rating) / (property.reviews.length + 1);
        property.rating = Number(newRating.toFixed(1));
    } else {
        property.rating = review.rating;
    }

    property.reviews.push(review._id);

    await property.save();
    return {
        newRating: property.rating,
        review
    };
}

async function deleteReview(propId, reviewId) {
    const updatedProp = await Property.findByIdAndUpdate(propId,
        {
            $pull: { reviews: reviewId }
        },
        { new: true })
        .populate('reviews');

    const reviews = updatedProp.reviews;

    if (reviews.length == 0) {
        updatedProp.rating = null;
    } else {
        const ratingSum = reviews.reduce((acc, b) => acc + b.rating, 0);
        const newRating = (ratingSum / reviews.length).toFixed(1);
        updatedProp.rating = Number(newRating);
    }

    await Review.findByIdAndDelete(reviewId);
    await updatedProp.save();

    return {
        newRating: updatedProp.rating,
        reviewId
    };
}

async function editReview(propId, reviewId, data) {
    const review = await Review.findById(reviewId);
    const property = await Property.findById(propId).populate('reviews');

    review.rating = data.rating;
    review.content = data.content;

    const ratingSum = property.reviews
        .map(r => {
            return r._id == reviewId
                ? data.rating
                : r.rating;
        })
        .reduce((acc, b) => acc + b, 0);

    const newRating = (ratingSum / property.reviews.length).toFixed(1);
    property.rating = Number(newRating);

    await property.save();
    await review.save();

    return {
        newRating,
        review
    };
}

module.exports = {
    getById,
    createReview,
    deleteReview,
    editReview
};
