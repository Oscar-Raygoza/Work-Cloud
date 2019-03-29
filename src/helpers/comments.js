const { Comment, Publications }= require('../models');
module.exports ={
    async newWest(){
       const comments = await Comment.find()
            .limit(3)
            .sort({ timestanp: -1})
    
    for(const comment of comments){
        const publication =Publications.findOne({ _id: comment.publication_id })
        comment.Publications = publication;
    }

    return comments;
        
    }

};