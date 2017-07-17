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
                    <div id="message-container" className="row">
		    	        <Message />
                    </div>
                    <div id="pieces-container" className="row">
                        <div className="col-sm-8">
				            <Pieces />
                        </div>
                        <div id="board-container" className="col-sm-1">
				            <Board />
                        </div>
                        <div id="checklist-container" className="col-sm-2">
				            <Checklist />
                        </div>
                    </div>
				<Footer />
			</div>
	   	);
	}
});

module.exports = Game;

