var React = require("react");
var Link = require("react-router").Link;

var NavButton = React.createClass({
    render: function() {
	    return (   
            <li><Link to={this.props.link}><button className={this.props.class}> {this.props.text} </button> </Link></li>
	   	);
	}
});

module.exports = NavButton;

