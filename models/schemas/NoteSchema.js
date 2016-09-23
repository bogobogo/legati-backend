var mongoose = require('mongoose');

module.exports = {
    _id: { type: mongoose.Schema.ObjectId, auto: true },
    timestamp : Number,
    videoUrl : String,
    videoIconUrl : String,
    text : String, 
    title : String, 
    audioUrl : String,
    updated_at: { type: Date, default: Date.now }
}