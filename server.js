console.log("Server debug...");
const express = require('express');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');
const cookisSession = require('cookie-session');
const methodOverride = require('method-override');

const app = express();

app.use(cookisSession({
    name: 'galleta',
    keys: ['dhsajlhd','djkbsa73djlksan','gdusioa']
}));


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

