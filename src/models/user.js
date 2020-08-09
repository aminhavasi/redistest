const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        trim: true,
        required: true,
        minlength: 3,
        maxlength: 255,
    },
    email: {
        type: String,
        trim: true,
        required: true,
        minlength: 3,
        maxlength: 255,
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
        maxlength: 1024,
    },
    date: {
        type: String,
    },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
