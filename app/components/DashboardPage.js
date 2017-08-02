import React from 'react';
import { Row, Col } from 'react-grid-system';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import UserIcon from 'material-ui/svg-icons/action/account-circle';
import ScoreIcon from 'material-ui/svg-icons/toggle/star';
import {cyan500} from 'material-ui/styles/colors';
import { Link } from "react-router";

import Auth from '../utils/Auth';
import Score from './children/Score';
import Pieces from './children//Pieces';
import Board from './children/Board';
import Footer from './children/Footer';
               
class DashboardPage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
        secretData: '',
        scoresOpen: false
    };
    this.handleScoresOpen = this.handleScoresOpen.bind(this);
    this.handleScoresClose = this.handleScoresClose.bind(this);
  }

  componentDidMount() {
    const xhr = new XMLHttpRequest();
    xhr.open('get', '/api/dashboard');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    // set the authorization HTTP header
    xhr.setRequestHeader('Authorization', `bearer ${Auth.getToken()}`);
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        this.setState({
          secretData: xhr.response.message
        });
      }
    });
    xhr.send();
  }

  handleScoresOpen() {
    getScores();
    this.setState({ scoresOpen: true })
  }
   handleScoresClose() {
    this.setState({ scoresOpen: false })
   }

  render() {
    return (
      <div>
    
        <nav> 
            <Row>
                <Col sm={5}>
                    <Score />
                </Col>
            
                <Col sm={2}>
                    <Link to="/"><h1 id="logo">Planet Venn</h1></Link>
                </Col>
                
                <Col sm={3} />

                <Col sm={2}>
                    <IconButton><ScoreIcon onClick={this.handleScoresOpen} color={cyan500} /></IconButton>
                    <Dialog modal={true} actions={<FlatButton label="Close" primary={true} onTouchTap={this.handleScoresClose} />} open={this.state.scoresOpen} onRequestClose={this.handleScoresClose} autoScrollBodyContent={true} >
                        <div id="score-modal">
                            <h1>My Scores</h1>
                            <div id="myDates"></div>
                            <div id="myScores"></div>
                        </div>
                    </Dialog>
                    <Link to="/logout"> <IconButton><UserIcon color={cyan500} /></IconButton></Link>
       
                </Col>
            </Row>
        </nav>

        <Row>
            <Col sm={4}>
                <Pieces />
            </Col>
            
            <Col sm={8}>
                <Board />
            </Col>
        </Row>
     
        
        <Footer />

      </div>
    );
  }
}
export default DashboardPage;

