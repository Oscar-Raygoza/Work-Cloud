const { Publications, Comment } = require('../models');

async function publicationsCounter(){
    return await Publications.countDocuments();
}
async function commentsCounter(){
    return await Comment.countDocuments();
}
async function publicationsViewsAll(){
    const result =await Publications.aggregate([{$group: {
        _id: '1',
        viewsAll: { $sum: '$views'}
    }}]);
    return result[0].viewsAll;
}
async function likes0All(){
    const result =await Comment.aggregate([{$group: {
        _id: '1',
        likesAll: { $sum: '$likes'}
    }}]);
    return result[0].likes;
}

module.exports = async ()=>{
    const result = await Promise.all([
        publicationsCounter(),
        commentsCounter(),
        publicationsViewsAll(),
        likes0All()
    ]);
    return {
        publictions:  result[0],
        comments: result[1],
        views: result[2],
        comments: result[3]    
    }
    
}