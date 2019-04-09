const ctrl = {};
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const { User, Publications, Group} = require('../models');
const path = require('path')

const { randomName }= require('../helpers/libs')
const fs = require('fs-extra')


/** 
 ** redirect to create a new group 
 *  */
ctrl.index = async (req, res) =>{
   res.render('groupnew', { title: 'home', layout: 'simplemain' } );
}

/**
 * !POST to create a new group
 */
ctrl.createGroup = async (req, res, next) =>{
   //!USER LOG
   // * (app.locals.user) 
   //Nethod Save
    const saveFile = async ()=>{
        console.log("entre al savefile()")
        const fileUrl = randomName();
        const filesRepet = await Group.find({ filename: fileUrl });
        if(filesRepet.length > 0){
            saveFile();
        }
        else{
            console.log(fileUrl); 
            const tempPath = req.file.path;
            const ext = path.extname(req.file.originalname).toLowerCase();
            const targerPath = path.resolve(`src/public/upload/img_groups/${fileUrl}${ext}`);
        
            if(ext === '.png' || ext === '.jpeg' 
            || ext === '.jpg' || ext === '.gif'){
                await fs.rename(tempPath,targerPath);
        
                const newGroup = new Group({
                    user_id: req.app.locals.user._id,
                    name: req.body.name,
                    image_group: fileUrl + ext,
                    description: req.body.description
                });
                const saveGroup = await newGroup.save();
                console.log(newGroup);
                res.send(`Ok new group create`);
            }
            else{
                await fs.unlink(tempPath);
                res.status(500).json({ error: 'Only files .mp4, .mp3, .png'})
            }    
        
        }
    };
    
    saveFile();

};


module.exports = ctrl;