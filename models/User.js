const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trimmed: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    friends: [{
        type: mongoose.Types.ObjectId,
        ref: 'User',
    }],
    thoughts: [{
        type: mongoose.Types.ObjectId,
        ref: 'Thought'
    }],
}, {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
});



const User = mongoose.model('User', userSchema);

module.exports = User;