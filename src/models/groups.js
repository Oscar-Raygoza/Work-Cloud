const { Schema, model } = require("mongoose");

const GroupSchema = new Schema({
    name: { type: String },
    description: { type: String },
    image_group: { type: String },
    createAt: { type: Date, default: Date.now()}
});
GroupSchema.virtual('uniqueId')
    .get(function(){
        return this.image_group.replace(path.extname(this.image_group),'');
    });

module.exports = model('Groups', GroupSchema)