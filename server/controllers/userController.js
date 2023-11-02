const { login, register, logout } = require('../services/userService');
const { body, validationResult } = require('express-validator');
const { errorParser } = require('../util/parseError');
const { isGuest, isUser } = require('../middlewares/guards');

const userController = require('express').Router();

userController.post('/register', isGuest(),
    body('email').isEmail().withMessage('Incorrect email'),
    body('password').isLength({ min: 3 }).withMessage('Password must be atleast 3 characters long'),
    async (req, res) => {
        try {
            const errors = validationResult(req).errors;

            if (errors.length > 0) {
                throw errors;
            }

            const user = await register(req.body.email, req.body.password);
            res.json(user);
        } catch (error) {
            const message = errorParser(error);
            res.status(400).json({ message });
        }
    });

userController.post('/login', isGuest(), async (req, res) => {
    try {
        const user = await login(req.body.email, req.body.password);
        res.json(user);
    } catch (error) {
        const message = errorParser(error);
        res.status(400).json(message);
    }
});

userController.get('/logout', isUser(), async (req, res) => {
    const token = req.token;
    await logout(token);
    res.sendStatus(204).end();
});

module.exports = userController;

