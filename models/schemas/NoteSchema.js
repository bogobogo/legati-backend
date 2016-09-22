module.exports = {
    _id: { type: Schema.ObjectId, auto: true },
    timestamp : Number,
    videoUrl : String, 
    text : String, 
    title : String, 
    audioUrl : String,
    updated_at: { type: Date, default: Date.now }
}