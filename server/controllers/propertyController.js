const { isUser } = require('../middlewares/guards');
const propertyService = require('../services/propertyService');
const { errorParser } = require('../util/parseError');

const propertyController = require('express').Router();

propertyController.get('/', async (req, res) => {

    const properties = await propertyService.getAll(req.queryParams);

    res.json(properties);
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

module.exports = propertyController;