var mongoose = require('mongoose');

var NotebookSchema = new mongoose.Schema({
    _id: { type: mongoose.Schema.ObjectId, auto: true },
    creator : String,
    name : String,
    shared : [String],
    notes : [require('./schemas/NoteSchema')],
    updated_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('notebooks', NotebookSchema);
