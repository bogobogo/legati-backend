var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Notebooks = require('../models/Notebook.js');

router.get('/:notebookId', function(req, res, next) {
  Notebooks.find(function (err, notebooks) {
    if (err) return next(err);
    res.json(notebooks);
  });
});

router.post('/:notebookId', function(req, res, next) {
  Notebooks.update({_id : req.params.notebookId},
                    {$addToSet : {notes : req.body}}, function(err, result) {
        if (!err) {
            console.log(result);
            res.json({ code: 201, message: result});
        } else {
            console.log(err);
            res.json({ code: 400, message: err });
        }
    });
});

router.delete('/:notebookId', function(req, res, next) {
  Notebooks.update({_id : req.params.notebookId,
        'notes._id' : req.body._id},
                    {$pull : {notes : {_id : req.body._id}}}, function(err, result) {
        if (!err) {
            console.log(result);
            res.json({ code: 201, message: result });
        } else {
            console.log(err);
            res.json({ code: 400, message: err });
        }
    });
});

router.put('/:notebookId', function(req, res, next) {
  Notebooks.update({_id : req.params.notebookId,
        'notes._id' : req.body._id},
                    {$set : {'notes.$.title' : req.body.title,
                'notes.$.text' : req.body.text,
                'notes.$.videoUrl' : req.body.videoUrl,
                'notes.$.audioUrl' : req.body.audioUrl}}, function(err, numAffected) {
        if (!err) {
            console.log(numAffected);
            res.json({ code: 201, message: numAffected});
        } else {
            console.log(err);
            res.json({ code: 400, message: err });
        }
    });
});

module.exports = router;