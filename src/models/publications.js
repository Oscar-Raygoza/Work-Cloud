const mongoose = require('mongoose');
const { Schema } = mongoose;
const path = require('path');
const { ObjectId } = Schema.ObjectId;

const PublicationsSchema = new Schema({
    title: { type: String },
    description: { type: String },
    filename: { type: String },
    views: { type: Number, default: 0 },
    likes: { type: Number, default: 0 },
    timestanp: { type: Date, default: Date.now },
    updateAt: { type: Date, default: Date.now },
    group_id: { type: ObjectId }
});
PublicationsSchema.virtual('uniqueId')
    .get(function(){
        return this.filename.replace(path.extname(this.filename),'');
    });
module.exports = mongoose.model('Publication', PublicationsSchema)