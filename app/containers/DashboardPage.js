import React from 'react';
import { Row, Col } from 'react-grid-system';

import Auth from '../utils/Auth';
import Game from '../components/Game.js';
import GameSpace from '../components/GameSpace';
import Footer from '../components/Footer';


class DashboardPage extends React.Component {


  constructor(props) {
    super(props);

    this.state = {
        secretData: '',
         pieces: {
            sun: '/images/sun.gif',
            sat: '/images/sat.gif',
            alien: '/images/alien.gif',  
        },
    
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

  render() {
    return (
      <div className="container">

        
        <nav> 
            <Row>
                <Col sm={3}>
                    <h1 id="logo">PLANET VENN</h1>
                </Col>
                <Col sm={6}>
                    <h4># of moves goes here:</h4>
                </Col>
                <Col sm={3}>
                    <h4>User icon</h4>
                </Col>
            </Row>
        </nav>
        

        <GameSpace />
        
        <Footer />

      </div>
    );
  }
}

export default DashboardPage;

