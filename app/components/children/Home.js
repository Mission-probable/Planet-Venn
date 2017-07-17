// dependency
var React = require("react");

// navigates within the application without full page reloads
var Link = require("react-router").Link;

var Home = React.createClass({
    render: function () {
	    return (
	      	<div className="container">
              <div className="row">
              	<header className="col-sm-8 col-sm-offset-2">
                   <h1><img src="./images/planet.jpg" alt="logo" width="100"/> Planet Venn</h1>
              	    <Link to="/register"><button className="btn btn-lg"> Register </button> </Link>
                	<Link to="/signin"><button className="btn btn-lg"> Sign In </button> </Link>
                    <Link to="/rules"><button className="btn btn-lg"> Just Play </button> </Link>
                </header>
                </div>
	      	</div>
	    );
  	}
});

module.exports = Home;

