const express = require('express');
const cors = require('cors');

const mongoose = require('mongoose');
const User = require('./models/User.js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

var salt = bcrypt.genSaltSync(10);
var secret = bcrypt.genSaltSync(10);

const app = express();
app.use(cors({ credentials: true, origin: 'http://localhost:3000' })); //if set credentials, cors must have more infomation 
app.use(express.json());
app.use(cookieParser());

mongoose.connect('mongodb+srv://lunah:lunah@cluster0.ytcukbu.mongodb.net/?retryWrites=true&w=majority')

app.post('/register', async (req, res) => {
    const { username, password } = req.body;
    try {
        const userDoc = await User.create({
            username,
            password: bcrypt.hashSync(password, salt),
        });
        res.json(userDoc);
    } catch (e) {
        res.status(400).json(e);
    }

});

app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const userDoc = await User.findOne({ username });
    const passOk = bcrypt.compareSync(password, userDoc.password);
    if (passOk) {
        jwt.sign({ username, id: userDoc._id }, secret, {}, (err, token) => {
            if (err) throw err;
            res.cookie('token', token).json({
                id: userDoc._id,
                username,
            });
        });
    } else {
        res.status(400).json('wrong credentials')
    }

});

app.get('/profile', (req, res) => {
    const { token } = req.cookies;
    jwt.verify(token, secret, {}, (err, info) => {
        if (err) throw err;
        res.json(info);
    });
});

app.post('/logout', (req, res) => {
    res.cookie('token', '').json('ok')
});



app.listen(8000);
