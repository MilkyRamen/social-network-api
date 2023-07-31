const express = require('express');
const router = express.Router();

const ThoughtController = require('../controllers/thoughtController');
const { model } = require('mongoose');

router.post('/thoughts', ThoughtController.createThought);

router.get('/thoughts', ThoughtController.getAllThoughts);

router.get('/thoughts/:thoughtId', ThoughtController.getThoughtById);

module.exports = router;