var React = require("react");

var Error = React.createClass({
      render: function () {
        return (
        	<div className="container">
            	<h1>404 Error: Page Not Found</h1>
            </div>
        );
    }
}

module.exports = Error;