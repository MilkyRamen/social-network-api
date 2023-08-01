const mongoose = require('mongoose');

const reactionSchema = new mongoose.Schema({
    reactionId: {
        type: mongoose.Schema.Types.ObjectId,
        default: new ObjectId,
    },
    reactionBody: {
        type: String,
        required: true,
        maxLength: 280,
    },
    username: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    }
});

reactionSchema.path('timestamp').get(function (timestamp) {
    return timestamp.toLocalString();
});

const Reaction = mongoose.model('Reaction', reactionSchema);

module.exports = Reaction;