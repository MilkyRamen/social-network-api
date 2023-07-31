const User = require('../models/User');

async function addFriend(req, res) {
    const { userId, friendId } = req.body;

    try {
        const user = await User.findById(userId);
        const friend = await User.findById(friendId);

        if (!user || !friend) {
            return res.status(404).json({ error: 'User or friend not found.' });
        }

        user.friends.push(friendId);
        await user.save();

        res.json(user);
    } catch (err) {
        res.status(500).json({ error: 'Failed to add friend.' });
    }
}

async function removeFriend(req, res) {
    const { userId, friendId } = req.params;

    try {
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ error: 'User not found.' });
        }

        user.friends = user.friends.filter((friend) => friend.toString() !== friendId);
        await user.save();

        res.json(user);
    } catch (err) {
        res.status(500).json({ error: 'Failed to remove friend.' });
    }
}

module.exports = {
    addFriend,
    removeFriend,
};