var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Notebooks = require('../models/Notebook.js');

// CRUD

router.get('/', function(req, res, next) {
  Notebooks.find(function (err, notebooks) {
    if (err) return next(err);
    res.json(notebooks);
  });
});

router.get('/:notebookId', function(req, res, next) {
  Notebooks.findOne({ _id : req.params.notebookId}, function(err, doc) {
        if(err == null) {
            res.json(doc);
        }else {
          res(err);
        }
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