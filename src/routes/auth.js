const express = require('express');
const router = express.Router();

const { registerValidator } = require('./../validator/auth');

router.get('/', (req, res) => {
    res.send('amin havasi');
});

router.post('/register', async (req, res) => {
    const { error } = await registerValidator(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    try {
    } catch (err) {}
});

module.exports = router;
