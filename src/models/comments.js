const { Schema, model } = require("mongoose");
const ObjectId = Schema.ObjectId;

const CommentSchema = new Schema({
    publication_id: { type: ObjectId },
    user_id: { type: ObjectId },
    comment: { type: String },
    timestanp: { type: Date, default: Date.now }
});
CommentSchema.virtual('publication')
    .set(function(publication, user){
        this._user = user;
        this._publication = publication;
    })
    .get(function(){
        const viewFk ={}
        viewFk.idPublicationfk = this._publication;
        viewFk.idUserfk = this._user; 
        
        return viewFk;
    })
module.exports = model('Comment', CommentSchema)