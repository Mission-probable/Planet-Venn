var React = require('react');
var DragDropContext = require('react-dnd').DragDropContext;
var HTML5Backend = require('react-dnd-html5-backend');
var Pieces = require('./Pieces');
var Board = require('./Board');
var Checklist = require('./Checklist');

var GameSpace = React.createClass({
  render: function () {
    return (
        <div class="container">

            <div id="pieces-container">
            <Pieces />
            </div>

            <div id="board-container">
            <Board />
            </div>

            <div id="checklist-container">
            <Checklist />
            </div>

      </div>
    );
  }
});

module.exports = DragDropContext(HTML5Backend)(GameSpace);
