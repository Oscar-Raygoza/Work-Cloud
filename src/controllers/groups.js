const ctrl = {};
const { Publications } = require("../models/index")
const slidebar= require('../helpers/slidebar')

ctrl.index = async (req, res) =>{
   res.render('groupnew', { title: 'home', layout: 'simplemain' } );
}



module.exports = ctrl;