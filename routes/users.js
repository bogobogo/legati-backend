var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Users = require('../models/User.js');

router.get('/', function(req, res, next) {
  Users.find(function (err, users) {
    if (err) return next(err);
    res.json(users);
  });
});

router.post('/', function(req, res, next) {
  Users.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

router.delete('/', function(req, res, next) {
  Users.findByIdAndRemove(req.body._id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

router.put('/', function(req, res, next) {
  Users.findByIdAndUpdate(req.body._id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
