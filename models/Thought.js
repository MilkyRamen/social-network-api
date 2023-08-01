const mongoose = require('mongoose');

const thoughtSchema = new mongoose.Schema({
    thoughtText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    username: {
        type: String,
        required: true,
    },
    reactions: [reactionSchema],
}, {
    toJSON: { getters: true },
    toObject: { getters: true },
});

thoughtSchema.path('timestamp').get(function (timestamp) {
    return timestamp.toLocalString();
});

const Thought = mongoose.model('Thought', thoughtSchema);

module.exports = Thought;