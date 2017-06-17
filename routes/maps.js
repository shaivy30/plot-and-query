var express = require('express');
var router = express.Router();
var path = require('path');

/* GET users listing. */
router.get('/maps234', function(req, res, next) {
  res.send('respond with a maps resource');
});

module.exports = router;
