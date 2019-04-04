const path = require('path')
const { randomName }= require('../helpers/libs')
const fs = require('fs-extra')
const { Publications, Comment, User } = require('../models/index')

const slidebar = require('../helpers/slidebar')

const ctrl = {};

ctrl.index = async (req, res) =>{
    let viewModel = { publication: {}, comments: {}};

    const publication = await Publications.findOne({filename: {$regex: req.params.publication_id}});
    console.log(publication)
    
    if(publication){
       
        publication.views += 1;
        viewModel.publication = publication;
        await publication.save();

        const comments = await Comment.aggregate([ 
            // Join with user_info table 
            { 
             $lookup:{ 
                  from: "users",  // other table name 
                  localField: "user_id", // name of users table field 
                  foreignField: "_id", // name of userinfo table field 
                  as: "user_info"   // alias for userinfo table 
                 }
            }, 
            { $unwind:"$user_info" },  // $unwind used for getting data in object or for one record only 
            { 
                $match:{ 
                 $and:[{"publication_id" : publication._id}] 
                } 
               }, 
            // define which fields are you want to fetch 
            { 
             $project:{ 
              timestanp: "$timestanp",
              comment: "$comment",
              _id : "$user_info._id", 
              email : "$user_info.email", 
              name : "$user_info.name" , 
              lastname : "$user_info.lastname", 
              nickname : "$user_info.nickname",
              image_profile: "$user_info.image_profile",
             } 
            } 
        ]);
        
        
       
        viewModel.comments = comments;

        viewModel = await slidebar(viewModel)
        console.log('NEW COMMENT: ' + viewModel)
        res.render('publications', viewModel)
    }else{
        res.redirect('/');
    }
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


ctrl.delete = async (req, res) =>{
    console.log('Entry to delete publication..')
    const Publication = await Publications.findOne({
        filename: {$regex: req.params.publications_id }
    });
    if(Publication){
        await fs.unlink(path.resolve('./src/public/upload/'+ Publication.filename))
        await Comment.deleteOne({
            publication_id: Publication._id
        });
        await Publication.remove();
        res.redirect('/');
    }else{
        res.status(500).json({error: 'Internal server error'})
    }
}

ctrl.comment = async (req, res) =>{
    const Publication = await Publications.findOne({
        filename: {$regex: req.params.publications_id }
    });

    console.log(Publication);
    if(Publication){
        const newComment= new Comment(req.body);
        newComment.publication_id = Publication._id;
        newComment.user_id = req.app.locals.user._id; // id de usuario logeado 
        await newComment.save();
        
        res.redirect('/publications/' + Publication.uniqueId)
        console.log(newComment) 
    }else{
        res.redirect('/');
    }
}   
ctrl.like = async (req, res) =>{
    const Publication = await Publications.findOne({
        filename: {$regex: req.params.publications_id }
    });
    if(Publication){
        Publication.likes += 1;
        await Publication.save();
        res.json({ likes: Publication.likes })
    }
}

module.exports = ctrl;