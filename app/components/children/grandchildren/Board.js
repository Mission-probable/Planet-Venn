// here we create the game board (venn diagram, rectangle for pieces that don't belong,
// -- and rule choice drop down)

// dependency
var React = require('react');

var Board = React.createClass({
  render: function () {
    return (
      <div className="row">
        <div className="col-sm-4">
          <img id="category1" data-rule="TBD" alreadyPlaced="false" src="./images/emptybox.gif" />
          <h1>NONE OF THE ABOVE</h1>
          <img id="category4" alreadyPlaced="false" src="./images/emptybox.gif" />
        </div>

        <div className="col-sm-2">
          <img id="category3" alreadyPlaced="false" src="./images/emptybox.gif" />
        </div>

        <div className="col-sm-2">
          <img id="category2" data-rule="TBD" alreadyPlaced="false" src="./images/emptybox.gif" />
        </div>
      </div>
    );
  }

});

module.exports = Board;

