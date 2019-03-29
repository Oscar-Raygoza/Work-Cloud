const { Schema, model } = require("mongoose");
const ObjectId = Schema.ObjectId;

const CommentSchema = new Schema({
    publication_id: { type: ObjectId },
    user_id: { type: ObjectId },
    comment: { type: String },
    timestanp: { type: Date, default: Date.now }
});

module.exports = model('Comment', CommentSchema)