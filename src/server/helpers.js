const moment = require("moment");
const path = require('path');
const helpers = {};

helpers.timeago = timestamp =>{
    return moment(timestamp).startOf("minutes").fromNow();
}

helpers.publicationHelper = filename =>{
    const ext = path.extname(filename);
    if(ext === ".mp4")
    return false
    else
    return true
}

helpers.messagesHelper = () =>{
    if(app.locals.signupMessage != [])
        return app.locals.signupMessage
        else
        return false
}

module.exports = helpers;