var React = require('react');
var DragDropContext = require('react-dnd').DragDropContext;
var HTML5Backend = require('react-dnd-html5-backend');
var Pieces = require('./Pieces');
var Board = require('./Board');
var Checklist = require('./Checklist');

var GameSpace = React.createClass({
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
          <Checklist />
        </div>
      </div>
    );
  }
});

module.exports = DragDropContext(HTML5Backend)(GameSpace);
