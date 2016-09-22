// module.exports = {
//     _id : Schema.Types.ObjectId,
//     creator : Schema.Types.ObjectId,
//     name : String,
//     shared : [String],
//     notes : [require('./NoteSchema')],
//     updated_at: { type: Date, default: Date.now }
// }
var schema = new Schema({
    _id : Schema.Types.ObjectId,
    creator : Schema.Types.ObjectId,
    name : String,
    shared : [String],
    notes : [require('./NoteSchema')],
    updated_at: { type: Date, default: Date.now
})

module.exports = schema;