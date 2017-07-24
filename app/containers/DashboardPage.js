import React from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import RaisedButton from 'material-ui/RaisedButton';

import Auth from '../utils/Auth';
import Game from '../components/Game.js';
import GameSpace from '../components/GameSpace';
import Footer from '../components/Footer';
import Checklist from '../components/Checklist';

class DashboardPage extends React.Component {


  constructor(props) {
    super(props);

    this.state = {
      secretData: '',
      pieces: {
        sun: '/images/sun.gif',
        sat: '/images/sat.gif',
        alien: '/images/alien.gif',
        open: false
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

    handleDrawerToggle() {
        return (
            this.setState({ open: this.state.open})
        )
    }

  render() {
    return (
      <div className="container">
        <AppBar className="Material-AppBar" title= "Planet Venn"> 
            <RaisedButton label="Use Checklist" onTouchTap={this.handleDrawerToggle} />
            <Drawer openSecondary={true} open={this.state.open} >
                <Checklist />
            </Drawer>
        </AppBar>
        <GameSpace />
        <Footer />
      </div>
    );
  }
}

export default DashboardPage;

