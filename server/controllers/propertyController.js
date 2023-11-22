const { isUser, isOwner, isReviewOwner } = require('../middlewares/guards');
const { preload, reviewPreload } = require('../middlewares/preload');
const propertyService = require('../services/propertyService');
const reviewService = require('../services/reviewService');
const { errorParser } = require('../util/parseError');

const propertyController = require('express').Router();

propertyController.get('/', async (req, res) => {
    try {
        const properties = await propertyService.getAll(req.query);
        res.json(properties);
    } catch (error) {
        const message = errorParser(error);
        res.status(400).json({ message });
    }
});


propertyController.get('/:id', async (req, res) => {
    const itemId = req.params.id;
    const item = await propertyService.getById(itemId);
    res.json(item);
});

propertyController.post('/', isUser(), async (req, res) => {
    try {
        const data = req.body;
        data._ownerId = req.user._id;

        const item = await propertyService.createProperty(data);
        res.json(item);
    } catch (error) {
        const message = errorParser(error);
        res.status(400).json({ message });
    }
});

propertyController.put('/:id', preload(), isOwner(), async (req, res) => {
    const item = await propertyService.getById(req.params.id);

    if (req.user._id != item._ownerId) {
        return res.status(403).json({ message: 'You can\'t edit this record' });
    }

    try {
        const result = await propertyService.updateProperty(req.params.id, req.body);
        res.json(result);
    } catch (error) {
        const message = errorParser(error);
        res.status(400).json({ message });
    }
});

propertyController.delete('/:id', isUser(), async (req, res) => {
    const item = await propertyService.getById(req.params.id);

    if (req.user._id != item._ownerId) {
        res.status(403).json({ message: 'You can\'t delete this record' });
    }

    try {
        await propertyService.deleteProperty(req.params.id);
        res.status(204).end();
    } catch (error) {
        const message = errorParser(error);
        res.status(400).json({ message });
    }
});

propertyController.post('/:id/bid', isUser(), async (req, res) => {
    try {
        await propertyService.bid(req.params.id, req.body.userId, req.body.price);
        res.status(204).end();
    } catch (error) {
        const message = errorParser(error);
        res.status(400).json({ message });
    }
});

propertyController.post('/:id/review', isUser(), async (req, res) => {
    try {
        const data = {
            content: req.body.content,
            rating: req.body.rating
        };

        const review = await reviewService.createReview(req.params.id, req.body.userId, data);
        res.json(review);
    } catch (error) {
        const message = errorParser(error);
        res.status(400).json({ message });
    }
});

propertyController.delete('/:id/review', reviewPreload(), isReviewOwner(), async (req, res) => {
    try {
        const updatedProp = await reviewService.deleteReview(req.params.id, req.body.reviewId);
        res.json(updatedProp);
    } catch (error) {
        const message = errorParser(error);
        res.status(400).json({ message });
    }
});

module.exports = propertyController;