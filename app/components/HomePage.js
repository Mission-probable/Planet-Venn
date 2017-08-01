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

    componentDidMount() {
        // makeItShine();
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
                    <div className="stars"></div>
                    <div className="twinkling"></div>
                    <div className="clouds">
                        <h1>
                            <img src="/images/planet.jpg" id="planetLogo" alt="blue planet" /> 
                            <span id="homepagelogo"> Planet Venn</span>
                        </h1>
                        <Link to="/signup"><RaisedButton label="Sign Up" primary={true} className="button-spacing" /> </Link>
                        <Link to="/login"><RaisedButton label="Sign In" primary={true} className="button-spacing" /> </Link>
                        <Link to="/play"><RaisedButton label="Just Play" primary={true} className="button-spacing" /> </Link>
                        <RaisedButton label="High Scores" primary={true} className="button-spacing" onTouchTap={this.handleScoresOpen} />
                    </div>
                </header>
                <Dialog modal={false} autoScrollBodyContent={true} open={this.state.scoresOpen} onRequestClose={this.handleScoresClose} >
                    <ScoreBoard />
                </Dialog>
            </div>
        )
    }

};

export default HomePage;

