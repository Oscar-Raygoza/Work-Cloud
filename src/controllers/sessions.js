const ctrl = {};
const { Publications } = require("../models/index")

ctrl.index = async (req, res) =>{
   res.render('login');
   
}


module.exports = ctrl;