const ctrl = {};
const { Publications } = require("../models/index")
const slidebar= require('../helpers/slidebar')

ctrl.index = async (req, res) =>{
    const postPublications = await Publications.find().sort({timestanp: -1});
    let viewModel = {
        publication: []
    }
    viewModel.publication = postPublications;
    viewModel = await slidebar(viewModel); 
    console.log(viewModel)
    res.render('index',  viewModel )
}


module.exports = ctrl;