const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
var logger = require("morgan");
var dotenv = require("dotenv");

// schema
var models = require('./models');

// loads environment variables from .env file into process.env
dotenv.load();

// connects to the database and load models
models.connect(process.env.DBURI);

// authentication files
const localSignupStrategy = require('./controllers/authentication/local-signup');
const localLoginStrategy = require('./controllers/authentication/local-login');
const authCheckMiddleware = require('./controllers/authentication/auth-check');

// routes
const authRoutes = require('./controllers/auth_controller');
const apiRoutes = require('./controllers/api_controller');

// initializes express
const app = express();

// sets port
var PORT = process.env.PORT || 8080;

// logs every request to the console
app.use(logger("dev"));

// tell the app to look for static files in these directories
app.use(express.static(process.cwd() + "/public"));

// // parses data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// passes the passport middleware
app.use(passport.initialize());

// loads passport strategies
passport.use('local-signup', localSignupStrategy);
passport.use('local-login', localLoginStrategy);

// passes middleware to check authentication
// app.use('/api', authCheckMiddleware);

// handles routes
app.use('/auth', authRoutes);
app.use('/api', apiRoutes);

// listens on port 3000
app.listen(PORT, () => {
  console.log("Listening on " + PORT);
});
