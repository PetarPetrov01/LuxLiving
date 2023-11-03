const propertyController = require('express').Router();
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
