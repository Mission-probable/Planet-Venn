var React = require('react');

var BoardVenn = React.createClass({
  render: function () {
    return (
      <img id={this.props.id} data-rule="TBD" alreadyPlaced="false" src="./images/emptybox.gif" />
    );
  }
});

module.exports = BoardVenn;
