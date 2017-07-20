import React from 'react';
import { Card, CardTitle } from 'material-ui/Card';
var Link = require("react-router").Link;

const HomePage = () => (
  	<div className="container">
        <div className="row">
            <header className="col-sm-8 col-sm-offset-2">
                <h1><img src="./images/planet.jpg" alt="logo" width="100"/> Planet Venn</h1>
              	<Link to="/signup"><button className="btn btn-lg"> Sign Up </button> </Link>
               	<Link to="/login"><button className="btn btn-lg"> Sign In </button> </Link>
                <Link to="/rules"><button className="btn btn-lg"> Just Play </button> </Link>
            </header>
        </div>
	</div>
);



export default HomePage;

