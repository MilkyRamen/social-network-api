const Thought = require('../models/Thought');

async function createThought(req, res) {
    const { title, content, author } = req.body;

    try {
        const thought = await Thought.create({ title, content, author });

        res.status(201).json(thought);
    } catch (err) {
        res.status(500).json({ error: 'Failed to create thought.' });
    }
}

async function getAllThoughts(req, res) {
    try {
        const thoughts = await Thought.find();

        res.json(thoughts);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch thoughts.' });
    }
}

async function getThoughtById(res, res) {
    const thoughtId = req.params.thoughtId;

    try {
        const thought = await Thought.findById(thoughtId);

        if (thought) {
            res.json(thought);
        } else {
            res.status(404).json({ error: 'Thought not found.' });
        }
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch thought.' }); 
    }
}

module.exports = {
    createThought,
    getAllThoughts,
    getThoughtById,
};