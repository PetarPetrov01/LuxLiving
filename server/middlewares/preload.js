const { getById } = require('../services/propertyService');

function preload() {
    return async (req, res, next) => {
        const propId = req.params.id;

        const property = await getById(propId);
        res.locals.property = property;

        next();
    };
}

module.exports = preload;