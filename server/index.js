const express = require('express');
const mongoose = require('mongoose');

const cors = require('./middlewares/cors');
const userController = require('./controllers/userController');

const connectionString = 'mongodb://localhost:27017/luxliving';
start();

async function start() {
    await mongoose.connect(connectionString);
    console.log('Connected to database');

    const app = express();

    app.use(express.json());
    app.use(cors());
    app.listen(3030, () => console.log('Server started on 3030'));
}

