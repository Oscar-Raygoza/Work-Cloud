const ctrl = {};

ctrl.index = async (req, res) =>{
   res.render('login');
}

ctrl.signup = async (req, res, next) =>{
   res.render('signup', { title: 'signup', layout: 'session' });
}


ctrl.signin = async (req, res, next) =>{
   res.render('signin', { title: 'signin', layout: 'session' });
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