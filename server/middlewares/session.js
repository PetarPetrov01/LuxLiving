const { verifyToken } = require('../services/userService');

module.exports = () => (req, res, next) => {
    const token = req.headers['x-authorization'];
    if (token) {
        try {
            const payload = verifyToken(token);
            req.user = payload;
            req.token = token;
        } catch (error) {
            res.status(401).json({ message: 'Invalid access token' });
        }
    }

    next();
};