const Reaction = require('../models/Reaction');

async function addReaction(req, res) {
    const { thoughtId, userId, type } = req.body;

    try {
        const reaction = await Reaction.create({ thoughtId, userId, type });

        res.status(201).json(reaction);
    } catch (err) {
        res.status(500).json({ error: 'Failed to add reaction.' });
    }
}

async function deleteReaction(req, res) {
    const reactionId = req.params.reactionId;

    try {
        const reaction = await Reaction.findById(reactionId);

        if (reaction) {
            await reaction.remove();
            res.json({ message: 'Reaction deleted successfully.' });
        } else {
            res.status(404).json({ error: 'Reaction not found.' });
        }
    } catch (err) {
        res.status(500).json({ error: 'Failed to delete reaction.' });
    }
}

module.exports = {
    addReaction,
    deleteReaction,
};