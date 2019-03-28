const ctrl = {};
const { Publications } = require("../models/index")

ctrl.index = async (req, res) =>{
    const postPublications = await Publications.find().sort({timestanp: -1}).limit(3);
    res.render('index', { postPublications })
}


module.exports = ctrl;