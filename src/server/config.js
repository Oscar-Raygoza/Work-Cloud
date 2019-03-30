const path = require('path');
const exphbs = require('express-handlebars');

const morgan = require('morgan');
const multer = require('multer');
const express = require('express');
const errorhandler = require('errorhandler');

const routes = require('../routes/index');
const routesSession = require('../routes/sessions');

/** Login */
const flash = require('connect-flash');
const passport = require('passport');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');
require('./passport',(passport))

module.exports = (app) =>{

      //Settings 
      app.set('port', process.env.PORT || 3000)
      app.set('views' , path.join(__dirname, '../views'))
      app.engine('.hbs', exphbs({
          defaultLayout: 'main',
          partialsDir: path.join(app.get('views'),'partials'),
          layoutsDir: path.join(app.get('views'),'layouts'),
          extname: '.hbs',
          helpers: require('./helpers')
      }));
      app.set('view engine', '.hbs');
  
    //middlewares
      app.use(morgan('dev'));
      app.use(multer({dest: path.join(__dirname, '../public/upload/temp')}).single('publication'))
      app.use(express.urlencoded({extended: false}));
      app.use(express.json());
      app.use(cookieParser());
      app.use(bodyParser.urlencoded({extended: false}));
      app.use(session({
        secret: 'xcsda3Raygoza3e6fda3',
        resave: false,
        saveUninitialized: false
      }));
      app.use(passport.initialize());
      app.use(passport.session());

    // routes
    routes(app);
    routesSession(app, passport);
    // static files
    app.use('/public', express.static(path.join(__dirname, '../public')));
    
    //errorhandlers
    if('development' === app.get('env')){
      app.use(errorhandler);
    }
    
  

    return app;
}