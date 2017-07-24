import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
var Link = require("react-router").Link;

const HomePage = () => (

        <div className="home-page">
            <header>
                <h1><img src="./images/planet.jpg" alt="blue planet" width="100"/> Planet Venn</h1>
              	<Link to="/signup"><RaisedButton label="Sign Up" primary={true} className="button-spacing" /> </Link>
               	<Link to="/login"><RaisedButton label="Sign In" primary={true} className="button-spacing" /> </Link>
                <Link to="/play"><RaisedButton label="Just Play" primary={true} className="button-spacing" /> </Link>
            </header>
        </div>

);

export default HomePage;

