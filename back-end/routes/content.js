const express = require('express');
const router = express.Router();
const main = require('../data/main');
const questions = require('../data/questions');
const about = require('../data/about');
const program = require('../data/program');

router.get('/main', (req, res) => {
  res.json(main);
})

router.get('/questions', (req, res) => {
  res.json(questions);
})

router.get('/about', (req, res) => {
  res.json(about);
})

router.get('/program', (req, res) => {
  res.json(program);
})

module.exports = router;

