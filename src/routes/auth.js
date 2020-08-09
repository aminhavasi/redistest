const express = require('express');
const router = express.Router();
const User = require('./../models/user');
const persianDate = require('persian-date');

persianDate.toLocale('en');
const date = new persianDate().format('YYYY/M/DD');

const { registerValidator } = require('./../validator/auth');

router.get('/', (req, res) => {
    res.send('amin havasi');
});

router.post('/register', async (req, res) => {
    const { error } = await registerValidator(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    const user = await User.findOne({ email: req.body.email });
    if (user) return res.status(400).send('this email is Already exict!');
    let newUser = new User(req.body);
    newUser.date = date;
    await newUser.save();
    res.status(201).send('ok');
    try {
    } catch (err) {
        res.status(400).send(err);
    }
});

module.exports = router;
