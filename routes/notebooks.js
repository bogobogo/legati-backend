var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Notebooks = require('../models/Notebook.js');

router.get('/', function(req, res, next) {
  Notebooks.find(function (err, notebooks) {
    if (err) return next(err);
    res.json(notebooks);
  });
});

router.post('/', function(req, res, next) {
  Notebooks.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

router.delete('/', function(req, res, next) {
  Notebooks.findByIdAndRemove(req.body._id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

router.put('/', function(req, res, next) {
  Notebooks.findByIdAndUpdate(req.body._id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;