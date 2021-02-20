// server.js
// where your node app starts

// init project
require('dotenv').config()
var express = require('express');
var app = express();
//port 5003
const {SERVER_PORT}=process.env

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
const dateController = require('./dateController');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});
app.get("/api/timestamp/:date?", dateController.getDate);


// listen for requests :)
var listener = app.listen(SERVER_PORT, function () {
  console.log('Your app is listening on port ' + SERVER_PORT);
});
