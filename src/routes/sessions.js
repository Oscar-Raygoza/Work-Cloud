const express = require('express');
const router = express.Router();

const Sessions = require('../controllers/sessions');

module.exports = (app, passport) =>{
    app.get('/login', Sessions.index)
    
};