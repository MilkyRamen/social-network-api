const mongoose = require('mongoose');
const Reaction = require('./Reaction');

const thoughtSchema = new mongoose.Schema({
    thoughtText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
    },
    timestamp: {
        type: Date,
        default: Date.now(),
    },
    username: {
        type: String,
        required: true,
    },
    reactions: [Reaction.schema],
}, {
    toJSON: { getters: true },
    toObject: { getters: true },
});

thoughtSchema.path('timestamp').get(function (timestamp) {
    return timestamp.toLocaleString();
});

const Thought = mongoose.model('Thought', thoughtSchema);

module.exports = Thought;