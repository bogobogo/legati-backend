var express = require('express');
var router = express.Router();

var API_KEY = "ggl-105229452060183835257";
var API_SECRET = "665ae755e37c49d1b2baa54e5b7df6a1";
var wixmedia = require("wixmedia");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/wmp/upload', function(req, res, next) {
  var config = authconfig.authConfig(authconfig.AuthModes.WIX).apiKey(API_KEY).secretKey(API_SECRET);

});

module.exports = router;