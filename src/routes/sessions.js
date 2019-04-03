const Sessions = require('../controllers/sessions');
const Profile = require('../controllers/profile');

const passport = require('passport');

module.exports = (app) =>{
    app.get('/login', Sessions.index);
    app.get('/signup', Sessions.signup);
    app.get('/signin' , Sessions.signin);  
    app.get('/profile' , isAuthenticated,Profile.profile);  
    app.get('/profile/:profile_id' , isAuthenticated,Profile.profileView);  


    app.post('/signup',  passport.authenticate('local-signup', {
        successRedirect: '/signin',
        failureRedirect: '/signup',
        passReqToCallback: true
    }));
    
    app.post('/signin',  passport.authenticate('local-signin', {
        successRedirect: `/profile`,
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

    function isAuthenticatedProfile(req, res, next){
        if(req.isAuthenticated())
            res.redirect('/home')      
        else
            res.redirect('/home')
    }

    function isNotAuthenticated(req, res, next){
        if(!req.isNotAuthenticated()){
          return next();
        }
        res.redirect('/');
    }
};