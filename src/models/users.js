const mongoose = require('mongoose');

const bcrypt = require('bcrypt-nodejs');

const { Schema } = mongoose;



const UsersSchema = new Schema({
    name: { type: String },
    lastname: { type: String },
    email: { type: String },
    number: { type: String },
    sex: { type: String },
    image_profile: { type: String },
    nickname: {type: String },
    password: { type: String },
    timestamp: { type: Date, default: Date.now }
}); 

UsersSchema.methods.encryptPassword = (password)=>{
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10))
};
UsersSchema.methods.unencryptPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('users', UsersSchema)