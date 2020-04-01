const app = require('express')();

// import body-parser module
const bodyParse = require('body-parser');

//import cors
const cors = require('cors');

const header = require('./header');

const routes = require('../app/routes/index');

//use cors
app.use(cors());
// setup middleware body-parser
app.use(bodyParse.urlencoded({ extended: true }));
//setup for raw payload
app.use(bodyParse.json());
// Add headers middleware
app.use(header());
//Add routes
app.use('/', routes);

module.exports = app;