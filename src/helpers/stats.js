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
    let viewsAll = 0;
    if(result.length > 0) {
        viewsAll += result[0].viewsAll;
    }
    return viewsAll;
}
async function likesAll(){
    const result =await Comment.aggregate([{$group: {
        _id: '1',
        likesAll: { $sum: '$likes'}
    }}]);
    let likesAll = 0;
  if (result.length > 0) {
    likesAll += result[0].likesAll;
  }
  return likesAll;
}

module.exports = async ()=>{
    const results = await Promise.all([
        publicationsCounter(),
        commentsCounter(),
        publicationsViewsAll(),
        likesAll()
    ]);
    return {
        publictions:  results[0],
        comments: results[1],
        views: results[2],
        comments: results[3]    
    }
    
}