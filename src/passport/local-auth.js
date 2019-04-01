const passport = require('passport');

const LocalStrategy = require('passport-local').Strategy;;

const { User } = require('../models');

passport.serializeUser((user, done)=>{
    console.log("serializeUser: "+user)
    done(null, user.id);
})

passport.deserializeUser(async (id, done)=>{
    const user = await User.findById(id);
    console.log("deserializeUser:"+user)
    done(null, user);
})

passport.use('local-signup', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
}, 
async (req, email, password, done )=>{
    const emailExist =await User.findOne({email: email});
    console.log(emailExist);

    if(!emailExist){
        const newUser =new User();
        newUser.email = email;
        newUser.password = newUser.encryptPassword(password);;
        await newUser.save();
        console.log(newUser)
        done(null, newUser);
    }else{
        return done(null, false, req.flash('signupMessage'),'Este email ya esta registrado')
    }

}));

passport.use('local-signin', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
}, async (req, email, password, done)=>{
    const user =await User.findOne({email: email});
    if(!await user){
        console.log('user not find 404');   
        return done(null, false, req.flash('signinMessage'),'El usuario o la contraseña son incorrectos');
    } 
    else if(!user.unencryptPassword(password)){
        console.log('password user error!')   
        return done(null, false, req.flash('signinMessage'),'El usuario o la contraseña son incorrectos x2');        
    }else{
        console.log("TODO BIEN: "+user)
        done(null, user);
    }
    
}));