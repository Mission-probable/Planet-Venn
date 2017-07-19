// here we create the game board (venn diagram, rectangle for pieces that don't belong,
// -- and rule choice drop down)

// dependency
var React = require('react');
var BoardVenn = require('./BoardVenn');

var Board = React.createClass({
  render: function () {
    return (
      <div>
        <div className="row">

          <div className="col-sm-4">
            <h4 className="text-center">Category 1</h4>
            <BoardVenn id={'category1'} />
          </div>

          <div className="col-sm-4">
            <h4 className="text-center">Both</h4>
            <BoardVenn id={'category3'} />
          </div>

          <div className="col-sm-4">
            <h4 className="text-center">Category 1</h4>
            <BoardVenn id={'category2'} />
          </div>

        </div>

        <div className="row">
          <div className="col-sm-12">
            <h4 className="text-center">Does Not Belong</h4>
            <BoardVenn id={'category4'} />
          </div>
        </div>
      </div>
    );
  }

});

module.exports = Board;

