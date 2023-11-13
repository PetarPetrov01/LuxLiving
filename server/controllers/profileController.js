const { getOwn } = require('../services/propertyService');

const profileController = require('express').Router();

profileController.get('/:id', async (req, res) => {

    const properties = await getOwn(req.params.id);

    res.json(properties);
});

module.exports = profileController;