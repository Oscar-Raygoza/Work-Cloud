const ctrl = {};
const { Publications } = require("../models/index")
const Passport = require('passport');


ctrl.index = async (req, res) =>{
   res.render('login');
}

ctrl.signup = async (req, res, next) =>{
   res.render('signup');
}


ctrl.signin = async (req, res, next) =>{
   res.render('signin', { title: 'signin', layout: 'session' });
}


ctrl.profile = async (req, res, next) =>{
   res.send('fs');
}

ctrl.notprofile = async (req, res, next) =>{
   res.send('FALSE')
}

ctrl.logout =(req,res,next)=>{
   req.logout();
   console.log(req.logout());
   res.redirect('/');
};


module.exports = ctrl;