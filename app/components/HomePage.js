import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
var Link = require("react-router").Link;

const HomePage = () => (
  	<div className="container">
        <div>
            <header>
                <h1><img src="./images/planet.jpg" alt="logo" width="100"/> Planet Venn</h1>
              	<Link to="/signup"><RaisedButton label="Sign Up" /> </Link>
               	<Link to="/login"><RaisedButton label="Sign In" /> </Link>
                <Link to="/play"><RaisedButton label="Just Play" /> </Link>
            </header>
        </div>
	</div>
);

export default HomePage;

