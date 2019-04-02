const Sessions = require('../controllers/sessions');
const passport = require('passport');

module.exports = (app) =>{
    app.get('/login', Sessions.index);
    app.get('/signup', Sessions.signup);       
    app.get('/signin' , Sessions.signin);  
    app.get('/profile' , isAuthenticated,Sessions.profile);  

    app.post('/signup',  passport.authenticate('local-signup', {
        successRedirect: '/profile',
        failureRedirect: '/signup',
        passReqToCallback: true
    }));

    app.post('/signin',  passport.authenticate('local-signin', {
        successRedirect: '/profile',
        failureRedirect: '/signin',
        passReqToCallback: true
    }));

    app.get('/logout', (req,res,next)=>{
        req.logout();
        console.log(req.logout());
        res.redirect('/');
     });
    
    function isAuthenticated(req, res, next){
        if(req.isAuthenticated()){
          return next();
        }
        res.redirect('/home')
    }
};