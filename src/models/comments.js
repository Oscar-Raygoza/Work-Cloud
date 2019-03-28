const { Schema } = require("mongoose");
const { ObjectId } = Schema;

const CommentSchema = new Schema({
    title: { type: String },
    description: { type: String },
    filename: { type: String },
    views: { type: Number, default: 0 },
    likes: { type: Number, default: 0 },
    timestanp: { type: Date, default: Date.now }
});
CommentSchema.virtual('uniqueId')
    .get(function(){
        return this.filename.replace(path.extname(this.filename),'');
    });
module.exports = mongoose.model('Comments', CommentSchema)