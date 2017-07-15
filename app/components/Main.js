// dependency
var React = require("react");

var Main = React.createClass({
	render: function () {
	    return (
	      	<div className="mainContainer">

              	{/* displays all child components */}
              	{this.props.children}
              
	      	</div>
	    );
  	}
});

module.exports = Main;