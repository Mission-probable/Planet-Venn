// dependency
var React = require('react');

var Board = React.createClass({
  render: function () {
    return (
      <div>
        <div className="row">

          <div className="col-sm-4">
            <h4 className="text-center">Category 1</h4>
            <div className="well" id="category1" data-rule="TBD" alreadyPlaced="false" src="./images/emptybox.gif" />
          </div>

          <div className="col-sm-4">
            <h4 className="text-center">Both</h4>
            <div className="well" id="category3" data-rule="TBD" alreadyPlaced="false" src="./images/emptybox.gif" />
          </div>

          <div className="col-sm-4">
            <h4 className="text-center">Category 2</h4>
            <div className="well" id="category2" data-rule="TBD" alreadyPlaced="false" src="./images/emptybox.gif" />
          </div>

        </div>

        <div className="row">
          <div className="col-sm-12">
            <h4 className="text-center">Does Not Belong</h4>
            <div className="well" id="category4" data-rule="TBD" alreadyPlaced="false" src="./images/emptybox.gif" />
          </div>
        </div>
      </div>
    );
  }

});

module.exports = Board;

