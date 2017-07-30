import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import { Link } from"react-router";

import ScoreBoard from './children/ScoreBoard';

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            scoresOpen: false
        };
        this.handleScoresOpen = this.handleScoresOpen.bind(this);
        this.handleScoresClose = this.handleScoresClose.bind(this);
    }

    handleScoresOpen() {
        return(
            this.setState({ scoresOpen: true })
        )
    }

    handleScoresClose() {
        return(
            this.setState({ scoresOpen: false })
        )
    }

    render() {
        return (
            <div className="home-page">
                <header>
                    <h1><img src="./images/planet.jpg" alt="blue planet" width="100"/> Planet Venn</h1>
                    <Link to="/signup"><RaisedButton label="Sign Up" primary={true} className="button-spacing" /> </Link>
                    <Link to="/login"><RaisedButton label="Sign In" primary={true} className="button-spacing" /> </Link>
                    <Link to="/play"><RaisedButton label="Just Play" primary={true} className="button-spacing" /> </Link>
                    <RaisedButton label="High Scores" primary={true} className="button-spacing" onTouchTap={this.handleScoresOpen} />
                </header>
               <Dialog   modal={false} autoScrollBodyContent={true} open={this.state.scoresOpen} onRequestClose={this.handleScoresClose} >
                    <ScoreBoard />
                </Dialog>
            </div>
        )
    }

};

export default HomePage;

