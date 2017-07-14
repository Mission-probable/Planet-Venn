
// dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var dotenv = require("dotenv");

// controller
var routes = require("./controllers/game_controller.js");

// loads environment variables from .env file into process.env
dotenv.load();

// sets mongoose to leverage Promises
mongoose.Promise = Promise;

// initializes express
var app = express();

// sets port
var PORT = process.env.PORT || 3000;

// logs every request to the console
app.use(logger("dev"));

// parses data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));//*****

// serves static content from the "public" directory
app.use(express.static(process.cwd() + "/public"));

// hooks Mongoose with the MongoDB database 
//***************** once we deploy to heroku we can uncomment out this ********************
// var mongoConfig = process.env.MONGODB_URI || "mongodb://localhost/planetvenn";
var mongoConfig = "mongodb://localhost/planetvenn";
mongoose.connect(mongoConfig);

// saves our mongoose connection to db
var db = mongoose.connection;

// displays any Mongoose errors
db.on("error", function(error) {
   console.log("Mongoose Error: ", error);
});

// displays success message once logged into db
db.once("open", function() {
	console.log("Mongoose connection successful.");
});

// listens on port 3000
app.listen(PORT, function() {
  	console.log("Listening on " + PORT);
});

