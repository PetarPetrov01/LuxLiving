const { login, register, logout } = require('../services/userService');
const { body, validationResult } = require('express-validator');

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
            res.status(400).json({ message });
        }
    });

