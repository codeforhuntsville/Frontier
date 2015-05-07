'use strict';
var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
  res.type('text/plain');
  res.send('hello world');
});

module.exports = router;
