var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    _id: { type: mongoose.Schema.ObjectId, auto: true },
    email : String, 
    firstName : String,
    lastName: String,
    passwordHash : String,
    instrument : String,
    role : String,
    sinceWhen : Number,
    updated_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('users', UserSchema);
