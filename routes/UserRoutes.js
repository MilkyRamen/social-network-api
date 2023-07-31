const express = require('express');
const router = express.Router();

const UserController = require('../controllers/userController');

router.post('/users/login', UserController.register);

router.post('/users/login', UserController.login);

router.get('/users/:userId', UserController.getUserProfile);

module.exports = router;