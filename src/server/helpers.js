const moment = require("moment");
const path = require('path');
const helpers = {};

helpers.timeago = timestamp =>{
    return moment(timestamp).startOf("minutes").fromNow();
}
helpers.imageHelper = filename =>{
    const ext = path.extname(filename);
    if(ext === ".mp4")
    return false
    else
    return true
}

module.exports = helpers;