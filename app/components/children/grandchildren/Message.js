var React = require("react");

var Message = React.createClass({
    render: function() {
	    return (
	    	<div className="panel">
                <div className="panel-body">
                    <h3>Player messages will go here</h3>
                    <h3>Player score will go here</h3> 
                </div>
            </div>
	   	);
	}
});

module.exports = Message;

