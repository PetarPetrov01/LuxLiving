const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const secret = 'sadio21oijdasd';

const tokenBlacklist = new Set();

async function register(email, password) {
    const existing = await User.findOne({ email }).collation({ locale: 'en', strength: 2 });
    if (existing) {
        throw new Error('Email is already taken');
    }

    const user = await User.create({
        email,
        hashedPassword: await bcrypt.hash(password, 10)
    });

    return createToken(user);
}
module.exports = {
    register,
};