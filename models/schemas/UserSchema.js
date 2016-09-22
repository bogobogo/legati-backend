module.exports = {
    _id : ObjectId,
    email : String, 
    firstName : String,
    lastName: String,
    passwordHash : String,
    instrument : String,
    role : String,
    sinceWhen : Number,
    updated_at: { type: Date, default: Date.now }
}
