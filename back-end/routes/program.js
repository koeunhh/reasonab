const express = require('express');
const router = express.Router();
const program = require('../data/program');

router.get('/', (req, res) => {
  res.json(program);
})

module.exports = router;

