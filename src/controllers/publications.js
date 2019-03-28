const path = require('path');
const { randomName }= require('../helpers/libs');
const fs = require('fs-extra')
const { Publications } = require('../models/index')

const ctrl = {};

ctrl.index = async (req, res) =>{
    let fileUri = req.params.publication_id;
    let publication = await Publications.findOne({filename: {$regex: fileUri}});
    console.log(publication);
    res.render('publications', publication)
}

ctrl.create = (req, res) =>{
    //Nethod Save
    const saveFile = async ()=>{
        console.log("entre al savefile()")
        const fileUrl = randomName();
        const filesRepet = await Publications.find({ filename: fileUrl });
        if(filesRepet.length > 0){
            saveFile();
        }
        else{
            console.log(fileUrl); 
            const tempPath = req.file.path;

            const ext = path.extname(req.file.originalname).toLowerCase();
            const targerPath = path.resolve(`src/public/upload/${fileUrl}${ext}`);
        
            if(ext === '.png' || ext === '.jpeg' 
            || ext === '.jpg' || ext === '.gif' 
            || ext === '.mp4'){
                await fs.rename(tempPath,targerPath);
        
                const newPostPublication = new Publications({
                    title: req.body.title,
                    filename: fileUrl + ext,
                    description: req.body.description
                });
                const savePostImg = await newPostPublication.save();
                console.log(newPostPublication);
                res.redirect(`/publications/` + fileUrl);
            }
            else{
                await fs.unlink(tempPath);
                res.status(500).json({ error: 'Only files .mp4, .mp3, .png'})
            }    
        
        }
    };
    
    saveFile();

}


ctrl.delete = (req, res) =>{
    res.render('index')
}
ctrl.comment = (req, res) =>{
    res.render('index')
}
ctrl.like = (req, res) =>{
    res.render('index')
}
module.exports = ctrl;