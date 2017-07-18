// here we create the sign in form (if needed)
// whether we need this or more than one component for sign in / sign out / register depends on 
//-- the authentication service we use; if more than one we can rename this appropriately

// dependency
var React = require("react");

//****** this should be removed if we don't use <Link> below
// navigates within the application without full page reloads
var Link = require("react-router").Link;

// ******* this sign in button that leads to the game is only temporary until we get authentication
//--- working and do this differently
var SignIn = React.createClass({
    render: function() {
	    return (
	    	<div className="container">
	    		<p> This is a Sign In Form</p>
	    		<a href="/auth/facebook"> Log In With Facebook </a> </br>
	    		<Link to="/game"><button className="btn btn-warning btn-sm"> Sign In </button> </Link>
	    	</div>
	   	);
	}
});

module.exports = SignIn;

