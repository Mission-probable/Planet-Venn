var React = require("react");

var Message = React.createClass({
    render: function() {
	    return (
	    	<div className="panel">
                <div className="panel-body">
                    <div className="row">
                        <h4 className="col-sm-10">Player messages will go here</h4>
                        <h4 className="col-sm-2">Player score</h4> 
                    </div>
                </div>
            </div>
	   	);
	}
});

module.exports = Message;

