
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
var Home = require("../components/children/Home");
var SignIn = require("../components/children/SignIn");
var Register = require("../components/children/Register");
var Rules = require("../components/children/Rules");
var Game = require("../components/children/Game");

// exports the routes
module.exports = (

	<Router history={hashHistory}>

		<Route path="/" component={Main} >

			{/* If user logs out ... */}
		    <Route path="home" component={Home} />

			{/* Show SignIn Form */}
			<Route path="signin" component={SignIn} />

			{/* Show Register Form */}
			<Route path="register" component={Register} />

		    {/* If user selects Play or Signs In, show Game component */}
		    <Route path="game" component={Game} />

		    {/* If user selects Rules, show Rules component */}
		    <Route path="rules" component={Rules} />

		    {/* If user selects any other path... show home page */}
		    <IndexRoute component={Home} />

	  	</Route>

	</Router>
);
