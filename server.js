console.log("Server debug...");
const express = require('express');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');
const cookisSession = require('cookie-session');
const methodOverride = require('method-override');
const compression = require('compression');
const app = express();

const sqlite3 = require('sqlite3');

let db = new sqlite3.Database('work_cloud_db');

db.run(`CREATE TABLE users(
        id_user INT PRIMARY KEY,
        name VARCHAR(50),
        lastname VARCHAR(60),
        email VARCHAR(60) UNIQUE,
        telephone VARCHAR(15) UNIQUE,
        sex CHAR,
        password_hash  VARCHAR(36)
        )`);
db.close();

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

