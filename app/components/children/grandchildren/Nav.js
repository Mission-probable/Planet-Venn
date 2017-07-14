// dependency
var React = require("react");

// navigates within the application without full page reloads
var Link = require("react-router").Link;

var Nav = React.createClass({
    render: function() {
	    return (
	    	// ****** Show Rules on Game Page
	    	// ****** Show Play on Rules Page
	    	// ****** Show Sign Out on Both Pages
	    	<div className="container">
		    	<Link to="/rules"><button className="btn btn-warning btn-sm"> Rules </button> </Link> 
		    	<Link to="/game"><button className="btn btn-warning btn-sm"> Play </button> </Link>
		    	<Link to="/home"><button className="btn btn-warning btn-sm"> Sign Out </button> </Link>
		    </div>
	   	);
	}
});

module.exports = Nav;

