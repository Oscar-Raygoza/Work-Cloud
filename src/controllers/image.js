const path = require('path');
const { randomName }= require('../helpers/libs');
const fs = require('fs-extra')
const { Image } = require('../models/index')

const ctrl = {};

ctrl.index = async (req, res) =>{
    let fileUri = req.params.image_id;
    let image = await Image.findOne({filename: {$regex: fileUri}});
    console.log(image);
    res.render('image', image)
}

ctrl.create = (req, res) =>{
    //Nethod Save
    const saveFile = async ()=>{

        const fileUrl = randomName();
        const filesRepet = await Image.find({ filename: fileUrl });
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
        
                const newPostImage = new Image({
                    title: req.body.title,
                    filename: fileUrl + ext,
                    description: req.body.description
                });
                const savePostImg = await newPostImage.save();
                console.log(newPostImage);
                res.redirect(`/images/` + fileUrl);
            }
            else{
                await fs.unlink(tempPath);
                res.status(500).json({ error: 'Only images'})
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