const { getById } = require('../services/propertyService');
const reviewService = require('../services/reviewService');


function preload() {
    return async (req, res, next) => {
        const propId = req.params.id;

        const property = await getById(propId);
        res.locals.property = property;

        next();
    };
}

function reviewPreload() {
    return async (req, res, next) => {
        const reviewId = req.body.reviewId;

        const review = await reviewService.getById(reviewId);
        res.locals.review = review;

        next();
    };
}

module.exports = { preload, reviewPreload };