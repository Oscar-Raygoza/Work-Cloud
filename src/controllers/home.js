const ctrl = {};
const { Image } = require("../models/index")

ctrl.index = async (req, res) =>{
    const postImages = await Image.find().sort({timestanp: 1}).limit(6);
    res.render('index', { postImages })
}


module.exports = ctrl;