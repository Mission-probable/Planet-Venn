// dependency
var React = require("react");

// navigates within the application without full page reloads
var Link = require("react-router").Link;

// components
var Header = require("./grandchildren/Header");

var Home = React.createClass({
    render: function () {
	    return (
	      	<div className="container">
              	<Header />
              	<Link to="/register"><button className="btn btn-warning btn-sm"> Register </button> </Link>
              	<Link to="/signin"><button className="btn btn-warning btn-sm"> Sign In </button> </Link>
	      	</div>
	    );
  	}
});

module.exports = Home;

