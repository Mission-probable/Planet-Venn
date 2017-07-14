// dependency
var React = require("react");

// components
var Nav = require("./grandchildren/Nav");
var Footer = require("./grandchildren/Footer");

var Rules = React.createClass({
    render: function() {
	    return (
	    	<div className="container">
		    	<Nav />
		    	<p> This is the Rules page </p>
		    	<Footer />
		    </div>
	   	);
	}
});

module.exports = Rules;

