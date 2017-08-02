import React from 'react';
import { Row, Col } from 'react-grid-system';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import UserIcon from 'material-ui/svg-icons/action/account-circle';
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
        scores: []
    };
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

  getScores() {
    getScores();
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
                    <IconMenu 
                    iconButtonElement={<IconButton><UserIcon color={cyan500} /></IconButton>}
                    anchorOrigin={{ horizontal: 'left', vertical: 'top' }}
                    targetOrigin={{ horizontal: 'left', vertical: 'top' }}
                    >
                        <MenuItem primaryText="Scores" onClick={this.getScores} />
                        <Link to="/logout"><MenuItem primaryText="Sign Out" /></Link>
                    </IconMenu>
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

