
// dependencies
var React = require("react");
var router = require("react-router");

// displays individual routes
var Route = router.Route;

// contains prop configurations and all routes
var Router = router.Router;

// acts as a catch all route
var IndexRoute = router.IndexRoute;

// handles routing client side without a server
var hashHistory = router.hashHistory;


// components
var Main = require("../components/Main");
var Results = require("../components/children/Header");
var Results = require("../components/children/Footer");

// exports the routes
module.exports = (

	<Router history={hashHistory}>

		<Route path="/" component={Main}>
		

	  	</Route>

	</Router>
);
