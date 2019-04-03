const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const { User } = require('../models');
const path = require('path')

const { randomName }= require('../helpers/libs')
const fs = require('fs-extra')

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
    console.log("entry in localsignup")
   
    if(req.body.password == req.body.password_confirm){    
        const emailExist =await User.findOne({email: email});
        console.log(emailExist);
        if(!emailExist){
            const newUser =new User();
            newUser.name = req.body.name;
            newUser.lastname = req.body.lastname;
            newUser.email = email;
            newUser.password = newUser.encryptPassword(password);
            newUser.number = req.body.number;
            newUser.sex = req.body.sex;
            newUser.nickname = req.body.nickname;
      
            /* ------------- save img profile -------------*/
            const saveFile = async ()=>{
                console.log("entre al savefile()")
                const fileUrl = randomName();
                const filesRepet = await User.find({ image_profile: fileUrl });
                if(filesRepet.length > 0){
                    saveFile();
                }
                else{
                    console.log(fileUrl); 
                    const tempPath = req.file.path;
        
                    const ext = path.extname(req.file.originalname).toLowerCase();
                    const targerPath = path.resolve(`src/public/upload/img_profile/${fileUrl}${ext}`);
                
                    if(ext === '.png' || ext === '.jpeg' 
                    || ext === '.jpg' || ext === '.gif' ){
                        await fs.rename(tempPath,targerPath);
                
                        
                        newUser.image_profile  = fileUrl + ext,
                          
                        console.log(req);
                        await newUser.save();
                        console.log(newUser);
                        done(null, newUser);

                    }
                    else{
                        await fs.unlink(tempPath);
                        res.status(500).json({ error: 'Only files images .jpg .png .gif'})
                    }    
                
                }
            };
            
            saveFile();
        
            /*/*/
        }else{
            return done(null, false, req.flash('signupMessage'),'Este email ya esta registrado')
        }
    }else{
        console.log("Error password in not correct")
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