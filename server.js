
// dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var dotenv = require("dotenv");

var passport = require("passport");
// var config = require("./config");
// var models = require("./models");

// ******* START AUTH TEST *************

const session = require('express-session');
const cookieParser = require('cookie-parser');
const path = require('path');
var User = require('./server/models/user');

const jwtSecret = "bumrush to inifinity696969";

// ******* END AUTH TEST *************

// ***** original server.js code */

// controller
var routes = require("./controllers/game_controller.js");

// loads environment variables from .env file into process.env
dotenv.load();

// sets mongoose to leverage Promises
mongoose.Promise = Promise;

// initializes express
var app = express();

// ******* START AUTH TEST *************

// app.use(express.static('./server/static/'));
// app.use(express.static('./client/dist/'));
app.use(cookieParser());

// ******* END AUTH TEST *************

// sets port
var PORT = process.env.PORT || 3000;

// logs every request to the console
app.use(logger("dev"));

// parses data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));//*****

// ******* START AUTH TEST *************

app.use(session({
    secret: jwtSecret,
    resave: true,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function(user, done) {
  console.log("serializeUser called");
  console.log(user);
  done(null, user._id);
});

passport.deserializeUser(function(_id, done) {
  console.log("deserializeUser called");
  console.log(_id);
  User.findById(_id, function(err, user) {
    done(err, user);
  });
});

const localSignupStrategy = require('./server/passport/local-signup');
const localLoginStrategy = require('./server/passport/local-login');
passport.use('local-signup', localSignupStrategy);
passport.use('local-login', localLoginStrategy);

const authCheckMiddleware = require('./server/middleware/auth-check');
app.use('/api', authCheckMiddleware);
const authRoutes = require('./server/routes/auth');
const apiRoutes = require('./server/routes/api');
app.use('/auth', authRoutes);
app.use('/api', apiRoutes);


// ******* END AUTH TEST *************

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

