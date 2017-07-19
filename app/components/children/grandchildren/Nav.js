var React = require("react");
var Link = require("react-router").Link;
var NavButton = require("./great-grandchildren/NavButton");

var Nav = React.createClass({
    render: function() {
	    return (
	    	<nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <h1><Link to="/home"><img src="./images/planet.jpg" alt="logo" width="50"/> Planet Venn</Link></h1>
                    </div>
                    <ul className="nav navbar-nav navbar-right">
                        <NavButton link="/rules" class="btn navbar-btn" text="Rules" />
		    	        <NavButton link="/game" class="btn navbar-btn" text="Play" />
                        <NavButton link="/home" class="btn navbar-btn" text="Sign Out" />
                    </ul>
                </div>
		    </nav>
	   	);
	}
});

module.exports = Nav;

