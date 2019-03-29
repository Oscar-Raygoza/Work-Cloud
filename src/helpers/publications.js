const { Publications } = require('../models');

module.exports ={
    async popular(){
        const publicationsPopulars =await Publications.find().limit(9).sort({
            likes:  -1
        })
        return publicationsPopulars;
    }
}