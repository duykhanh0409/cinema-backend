require ('dotenv').config();
var path = require('path');
var express = require("express")
var bodyParser =  require('body-parser')


var movieRoute=require('./routes/movie.route')
var scheduleRoute=require('./routes/schedule.route')
var bookingRoute=require('./routes/booking.route')

var fs = require('fs');
const { stringify } = require("querystring");

var app = express();

var dir = path.join(__dirname, 'public');
app.use(express.static(dir));
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, "build")));

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/movie', movieRoute);
app.use('/schedule', scheduleRoute);
app.use('/booking', bookingRoute);
app.use(express.static("build"))

app.set('view engine', 'pug')
app.set('views', './views')



app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "build", "index.html"));
  });
app.listen(process.env.PORT || 5000 , function(){
    console.log("'Server listening on port" + process.env.PORT);
})