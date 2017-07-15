var React = require("react");
var Link = require("react-router").Link;

var Nav = React.createClass({
    render: function() {
	    return (
	    	// ****** Show Rules on Game Page
	    	// ****** Show Play on Rules Page
	    	// ****** Show Sign Out on Both Pages
            //possibly make buttons separate components and use shouldComponentUpdate
            //or make buttons active when we are on that page

	    	<nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <h1><img src="../../../public/images/logo.png" alt="logo" width="50"/> Planet Venn</h1>
                    </div>
                    <ul className="nav navbar-nav navbar-right">
		    	        <li><Link to="/rules"><button className="btn btn-warning navbar-btn"> Rules </button> </Link></li>
		    	        <li><Link to="/game"><button className="btn btn-warning navbar-btn"> Play </button> </Link></li>
		    	        <li><Link to="/home"><button className="btn btn-warning navbar-btn"> Sign Out </button> </Link></li>
                    </ul>
                </div>
		    </nav>
	   	);
	}
});

module.exports = Nav;

