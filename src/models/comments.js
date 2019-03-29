const { Schema, model } = require("mongoose");
const ObjectId = Schema.ObjectId;

const CommentSchema = new Schema({
    publication_id: { type: ObjectId },
    user_id: { type: ObjectId },
    comment: { type: String },
    timestanp: { type: Date, default: Date.now }
});
CommentSchema.virtual('publication')
    .set(function(publication){
        this._publication = publication;
    })
    .get(function(){
        return this._publication
    })
module.exports = model('Comment', CommentSchema)