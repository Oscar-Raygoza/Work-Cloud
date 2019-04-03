const ctrl = {};
const { Publications } = require("../models/index")
const Passport = require('passport');

ctrl.profile = async (req, res, next) =>{
    if(req.app.locals.user != undefined){
        res.send(req.app.locals.user)
    }else{
        res.send("null");
    }
}

module.exports = ctrl;