console.log("Server debug...");
const express = require('express');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');
const cookisSession = require('cookie-session');
const methodOverride = require('method-override');
const compression = require('compression');
const app = express();

const sqlite3 = require('sqlite3');
/*
const sequelize = new Sequelize('work_cloud_db',null,null,{
    dialect: 'sqlite',
    storage: './work_cloud_db'
})
 */

 let db = new sqlite3.Database("work_cloud_db")


 db.run(`
    CREATE TABLE user(
      id_user INT PRIMARY KEY,
      name VARCHAR(40) NOT NULL,
      lastname VARCHAR(50) NOT NULL,
      nickname VARCHAR(20) UNIQUE NOT NULL,
      sex VARCHAR(2) NOT NULL,
      email VARCHAR(50) UNIQUE NOT NULL,
      number VARCHAR(15) UNIQUE NOT NULL,
      password_hash VARCHAR(250) NOT NULL
    )

    CREATE TABLE profile_picture(
      id_profile_picture INT PRIMARY KEY,
      id_user INT NOT NULL,
      profile_picture BLOB,
      likes INT,
      FOREIGN KEY(id_user) REFERENCES user(id_user)
    )

    CREATE TABLE profile_banner(
      id_profile_picture INT PRIMARY KEY,
      id_user INT NOT NULL,
      profile_banner BLOB,
      likes INT,
      FOREIGN KEY(id_user) REFERENCES user(id_user)
    )
    
    CREATE TABLE comment(
      id_comment INT PRIMARY KEY,
      id_user INT,
      likes INT,
      comment VARCHAR(255),
      FOREIGN KEY(id_user) REFERENCES user(id_user)
    )

    CREATE TABLE publication_post(
      id_publication_post INT PRIMARY KEY,
      id_user INT,
      post VARCHAR(255) NOT NULL,
      FOREIGN KEY(id_user) REFERENCES user(id_user)
    )

    CREATE TABLE publication_image(
      id_publication_image INT PRIMARY KEY,
      id_user INT,
      description  VARCHAR(255),
      post_img BLOB,
      FOREIGN KEY(id_user) REFERENCES user(id_user)
    )

    CREATE TABLE publication_video(
      id_publication_video INT PRIMARY KEY,
      id_user INT,
      description  VARCHAR(255),
      post_video BLOB,
      FOREIGN KEY(id_user) REFERENCES user(id_user)
    )

    CREATE TABLE publication_pdf(
      id_publication_video INT PRIMARY KEY,
      id_user INT,
      description  VARCHAR(255),
      post_pdf BLOB,
      FOREIGN KEY(id_user) REFERENCES user(id_user)
    )
    
    CREATE TABLE publication_code(
      id_publication_video INT PRIMARY KEY,
      id_user INT,
      code VARCHAR,
      FOREIGN KEY(id_user) REFERENCES user(id_user)
    )

    CREATE TABLE comments_publication(
      id_comment INT,
      id_publication INT, 
      type VARCHAR(10),
      FOREIGN KEY(id_comment) REFERENCES comment(id_comment)
    )

    CREATE TABLE grup(
      id_grup INT PRIMARY KEY,
      name VARCHAR(50),
      category VARCHAR(50),
    )
    
    CREATE TABLE grup_user(
      id_user INT,
      id_grup INT,
      FOREIGN KEY(id_user) REFERENCES user(id_user),
      FOREIGN KEY(id_grup) REFERENCES grup(id_grup)
    )
    
 `,(err)=>{
   console.log(err);
 });
  /**Confugurando las cookis */
app.use(cookisSession({
    name: 'galleta',
    keys: ['dhsajlhd','djkbsa73djlksan','gdusioa']
}));

app.use(compression());
app.use(express.static(__dirname + '/assets'));

const staticsRoutes = require('./routes/statics_routes');
//const registrationsRoutes = require('./routes/registrations_routes');
//const sessionsRoutes = require('./routes/sessions_routes');

app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine','pug');


app.use(staticsRoutes);
//app.use(registrationsRoutes);     // aun no existen
//app.use(sessionsRoutes);          // aun no existen


app.listen(3000);

console.log("Server run in port 3000");

