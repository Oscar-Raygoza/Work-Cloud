const { Group } = require('../models');

module.exports ={
    async newGroups(){
        const newGroups =await Group.find().limit(3).sort({
            createAt:  1
        })
        return newGroups;
    }
}