import React from 'react';
import AppBar from 'material-ui/AppBar';
import FloatingActionButton from "material-ui/FloatingActionButton"
import User from 'mui-icons/ionicons/ios-person';

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
        alien: '/images/alien.gif'
      }
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
        <AppBar className="Material-AppBar" title= "Planet Venn"> <FloatingActionButton> <User /> </FloatingActionButton> </AppBar>
        <GameSpace />
        <Footer />
      </div>
    );
  }
}

export default DashboardPage;

