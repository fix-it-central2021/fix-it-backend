
const express = require("express");
const app = express();
app.use(express.json());




const ordenesRoute = require('./routes/orden')
const repuestosRoute = require('./routes/repuestos')

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept,access-token,access-user");
    res.header("Access-Control-Allow-Methods", "GET, POST, DELETE , PUT");
    next();
  });
  
app.use('/repuesto',repuestosRoute)
app.use('/orden',ordenesRoute)


app.use(express.static('public'))

module.exports = app
