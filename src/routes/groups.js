const express = require('express');
const router = express.Router();
const groups = require('../controllers/groups');

const publications = require('../controllers/publications');

module.exports = app =>{
router.get('/groupnew', isAuthenticated,groups.index);


function isAuthenticated(req, res, next){
    if(req.isAuthenticated()){
      return next();
    }
    res.redirect('/home')
}

app.use(router);
};
