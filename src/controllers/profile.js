const ctrl = {};
const { Publications } = require("../models/index")
const Passport = require('passport');

ctrl.profile = async (req, res, next) =>{
    if(req.app.locals.user != undefined){
        res.redirect('/profile/'+req.app.locals.user.uniqueId)
    }else{
        res.send("null");
    }
}


ctrl.profileView = async (req, res, next) =>{
    if(req.app.locals.user != undefined){
        let viewModel = { title: 'home', layout: 'simplemain'}
        viewModel.user = req.app.locals.user;
        console.log("VIEWMODEL USER: "+ viewModel.user)
        res.render('profile', viewModel)
    }else{
        res.send("null");
    }
}

module.exports = ctrl;