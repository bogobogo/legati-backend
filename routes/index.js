var express = require('express');
var router = express.Router();

var API_KEY = "ggl-105229452060183835257";
var API_SECRET = "665ae755e37c49d1b2baa54e5b7df6a1";
var wixmedia = require("wixmedia");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/wmp/token', function(req, res, next) {
  var config = wixmedia.auth.config('WIX').apiKey(API_KEY).secretKey(API_SECRET);
  wixmedia.auth.client(config).getAuthToken(function (err, token) {
    res.json(token);
  });
  // uploader.uploadFromFile(req.body.file, function(data) {
  //   console.log("New image created:" + data.imageId);
  //   res.json(data);
  // }, function(error) {
  //   console.log(error);
  //   return next(error);
  // });
});

module.exports = router;