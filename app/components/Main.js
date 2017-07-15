// dependency
var React = require("react");
var Link = require("react-router").Link;

var Main = React.createClass({
	render: function () {
	    return (
	      	<div className="mainContainer">

              	{/* displays all child components */}
				<h2><strong><Link to="pieces">Start Game!</Link></strong></h2>
              	{this.props.children}
              
	      	</div>
	    );
  	}
});

module.exports = Main;