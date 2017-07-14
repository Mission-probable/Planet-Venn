// here we create the sign in form (if needed)
// whether we need this or more than one component for sign in / sign out / register depends on 
//-- the authentication service we use; if more than one we can rename this appropriately

// dependency
var React = require("react");

var SignIn = React.createClass({
    render: function() {
	    return (
	    	<p> This is a Sign In Form</p>
	   	);
	}
});

module.exports = SignIn;

