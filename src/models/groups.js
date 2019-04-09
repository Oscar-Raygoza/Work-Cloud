const { Schema, model } = require("mongoose");
const ObjectId = Schema.ObjectId;

const GroupSchema = new Schema({
    user_id: { type: ObjectId },
    name: { type: String },
    description: { type: String },
    image_group: { type: String },
    createAt: { type: Date, default: Date.now()}
});
GroupSchema.virtual('uniqueId')
    .set(function(user){
        this._user = user;
    })
    .get(function(){
        return this.image_group.replace(path.extname(this.image_group),'');
    });

module.exports = model('Groups', GroupSchema)