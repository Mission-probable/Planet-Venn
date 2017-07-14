// here we create the register form (if needed)
// whether we need this or more than one component for sign in / sign out / register depends on 
//-- the authentication service we use; if more than one we can rename this appropriately


var React = require("react");

var Register = React.createClass({
    render: function() {
	    return (
	    	<p> This is a Register Form</p>
	   	);
	}
});

module.exports = Register;

