const express = require('express');
const router = express.Router();

const FriendListController = require('../controllers/friendListController');

router.post('/friends', FriendListController.addFriend);

router.delete('/friends/friendId', FriendListController.removeFriend);

router.get('/friends/:userId', FriendListController.getFriendList);

module.exports = router;