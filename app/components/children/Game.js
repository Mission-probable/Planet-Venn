// dependency
var React = require("react");

// components
var Nav = require("./grandchildren/Nav");
var Message = require("./grandchildren/Message");
var Pieces = require("./grandchildren/Pieces");
var Board = require("./grandchildren/Board");
var Checklist = require("./grandchildren/Checklist");
var Footer = require("./grandchildren/Footer");

var Game = React.createClass({
	render: function() {
	    return (
	    	<div className="container">
		    	<Nav />
                    <div className="wrapper">
		    	        <Message />
				        <Pieces />
				        <Board />
				        <Checklist />
                    </div>
				<Footer />
			</div>
	   	);
	}
});

module.exports = Game;

