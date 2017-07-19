// here we create the game board (venn diagram, rectangle for pieces that don't belong,
// -- and rule choice drop down)

// dependency
var React = require('react');
var BoardVenn = require('./BoardVenn');

var Board = React.createClass({
  render: function () {
    return (
      <div className="row">

        <div className="col-sm-4">
          <BoardVenn id={'category1'} />
          <h1>NONE OF THE ABOVE</h1>
          <BoardVenn id={'category4'} />
        </div>

        <div className="col-sm-2">
          <BoardVenn id={'category3'} />
        </div>

        <div className="col-sm-2">
          <BoardVenn id={'category2'} />
        </div>

      </div>
    );
  }

});

module.exports = Board;

