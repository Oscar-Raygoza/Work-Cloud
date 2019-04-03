const { Schema, model } = require("mongoose");
const ObjectId = Schema.ObjectId;

const publicatiom_has_groupSchema = new Schema({
    user_id: { type: ObjectId },
    group_id: { type: ObjectId },
});
CommentSchema.virtual('publication')
    .set(function(publication , group){
        this._publication = publication;
        this._group = group;
    })
    .get(function(){
        return this._publication, this._group
    })
    module.exports = model('publicatiom_has_groupSchema', publicatiom_has_groupSchema)