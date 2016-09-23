var mongoose = require('mongoose');

module.exports = {
    _id: { type: mongoose.Schema.ObjectId, auto: true },
    timestamp : Number,
    videoMp4Url : String,
    videoMp4IconUrl : String,
    videoWebUrl : String,
    videoWebIconUrl : String,
    text : String, 
    title : String, 
    audioUrl : String,
    updated_at: { type: Date, default: Date.now }
}