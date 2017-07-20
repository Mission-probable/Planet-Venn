import React from 'react';
import Auth from '../utils/Auth';
import Game from '../components/Game.js';

var Nav = require('../components/Nav');
var Message = require('../components/Message');
var Pieces = require('../components/Pieces');
var Board = require('../components/Board');
var Checklist = require('../components/Checklist');
var Footer = require('../components/Footer');

class DashboardPage extends React.Component {

  /**
   * Class constructor.
   */
  constructor(props) {
    super(props);

    this.state = {
      secretData: '',
      pieces: {
        sun: '/images/sun.gif',
        sat: '/images/sat.gif',
        alien: '/images/alien.gif'
      }
    };
  }

  /**
   * This method will be executed after initial rendering.
   */
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
          <Nav currentPage="play"/>
          <div id="message-container" className="row">
              <Message />
          </div>
          <div id="pieces-container" className="row">
              <div className="col-sm-2">
                  <Pieces />
              </div>
              <div id="board-container" className="col-sm-8">
                  <Board />
              </div>
              <div id="checklist-container" className="col-sm-2">
                  <Checklist />
              </div>
          </div>
          <Footer />
      </div>

    );
  }

}

export default DashboardPage;

