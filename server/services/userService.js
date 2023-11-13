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

async function login(email, password) {
    const user = await User.findOne({ email }).collation({ locale: 'en', strength: 2 });
    if (!user) {
        throw new Error('Incorrect username or password');
    }

    const match = bcrypt.compare(password, user.hashedPassword);
    if (!match) {
        throw new Error('Incorrect username or password');
    }

    return createToken(user);
}

async function logout(token) {
    tokenBlacklist.add(token);
}

function verifyToken(token) {
    if (tokenBlacklist.has(token)) {
        throw new Error('This token is blacklisted');
    }

    return jwt.verify(token, secret);
}

function createToken(user) {
    const payload = {
        _id: user._id,
        email: user.email,
    };

    return {
        _id: user._id,
        email: user.email,
        accessToken: jwt.sign(payload, secret)
    };
}

module.exports = {
    register,
    login,
    logout,
    createToken,
    verifyToken
};