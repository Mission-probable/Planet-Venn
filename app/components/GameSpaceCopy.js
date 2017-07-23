// var React = require('react');
var DragDropContext = require('react-dnd').DragDropContext;
var HTML5Backend = require('react-dnd-html5-backend');
var Pieces = require('./Pieces');
var Board = require('./Board');
var Checklist = require('./Checklist');
import React from 'react';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';



var GameSpace = React.createClass({

  constructor: function(props) {
    this.state = {open: false};
  },

  handleToggle: function() {
   this.setState({open: !this.state.open})
  }.bind(this),

  render: function () {
    return (
      <div id="pieces-container" className="row">
        <div className="col-sm-3">
          <Pieces />
        </div>
        <div id="board-container" className="col-sm-6">
          <Board />
        </div>
        <div id="checklist-container" className="col-sm-3">

      <div>
        <RaisedButton
          label="Toggle Drawer"
          onTouchTap={this.handleToggle}
        />
        <Drawer width={200} openSecondary={true} open={this.state.open} >
          <Checklist title="Checklist" />
        </Drawer>
      
 

        </div>
      </div>
      </div>
    );
  }
});

module.exports = DragDropContext(HTML5Backend)(GameSpace);
