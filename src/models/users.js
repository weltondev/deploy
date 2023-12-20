const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;