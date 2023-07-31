const User = require('../models/User');

async function register(req, res) {
    const { username, email, password } = req.body;

    try {
        const user = await User.create({ username, email, password });

        res.status(201).json(user);
    } catch (err) {
        res.status(500).json({ error: 'Failed to register user.'});
    }
}

async function login(req, res) {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });

        if (!user || !user.comparePassword(password)) {
            return res.status(401).json({ error: 'Invalid Credentials.' });
        }

        res.json({ user });
    } catch (err) {
        res.status(500).json({ error: 'Failed to login.' });
    }
}

async function getUserProfile(req, res) {
    const userId = req.params.userId;

    try {
        const user = await User.findById(userId);

        if (user) {
            res.json(user);
        } else {
            res.status(404).json({ error: 'User not found.' });
        }
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch user profile.' });
    }
}

module.exports = {
    register,
    login,
    getUserProfile,
};