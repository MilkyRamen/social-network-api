const express = require('express');
const router = express.Router();

const ReactionController = require('../controllers/reactionController');

router.post('/reactions', ReactionController.addReaction);

router.delete('/reactions/:reactionId', ReactionController.deleteReaction);

module.exports = router;