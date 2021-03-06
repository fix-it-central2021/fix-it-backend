
const express = require("express");
const app = express();
var cors = require('cors')
app.use(express.json());


var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors(corsOptions))


const ordenesRoute = require('./routes/orden')
const repuestosRoute = require('./routes/repuestos')

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept,access-token,access-user");
    res.header("Access-Control-Allow-Methods", "GET, POST, DELETE , PUT, OPTIONS");
    next();
  });

  
  
app.use('/repuesto',repuestosRoute)
app.use('/orden',ordenesRoute)
app.get('/health', async function (req,res) { 

  return res.status(200).json("Health API");
 })

app.use(express.static('public'))

module.exports = app
