import React, { Component } from 'react';
import update from 'react/lib/update';
import { DragDropContext } from 'react-dnd';
import HTML5Backend, { NativeTypes } from 'react-dnd-html5-backend';
import Dustbin from './Dustbin';
import Box from './Box';
import ItemTypes from './ItemTypes';

var Checklist = React.createClass({
@DragDropContext(HTML5Backend)
export default class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dustbins: [
        { accepts: [ItemTypes.RULE2], lastDroppedItem: null },
        { accepts: [ItemTypes.RULE1], lastDroppedItem: null },
        { accepts: [ItemTypes.RULE3, ItemTypes.RULE2, NativeTypes.URL], lastDroppedItem: null },
        { accepts: [ItemTypes.RULE3, NativeTypes.FILE], lastDroppedItem: null },
      ],
      boxes: [
        { name: 'Sun', type: ItemTypes.RULE2 },
        { name: 'Blue', type: ItemTypes.RULE1 },
        { name: 'Blue & Sun', type: ItemTypes.RULE3 },
      ],
      droppedBoxNames: [],
    };
  }

  isDropped(boxName) {
    return this.state.droppedBoxNames.indexOf(boxName) > -1;
  }

  render() {
    const { boxes, dustbins } = this.state;

    return (
      <div>
        <div style={{ overflow: 'hidden', clear: 'both' }}>
          {dustbins.map(({ accepts, lastDroppedItem }, index) =>
            <Dustbin accepts={accepts} lastDroppedItem={lastDroppedItem} onDrop={item => this.handleDrop(index, item)} key={index} />,
          )}
        </div>

        <div style={{ overflow: 'hidden', clear: 'both' }}>
          {boxes.map(({ name, type }, index) =>
            <Box name={name} type={type} isDropped={this.isDropped(name)} key={index} />,
          )}
        </div>
      </div>
    );
  }

  handleDrop(index, item) {
    const { name } = item;

    this.setState(update(this.state, {
      dustbins: {
        [index]: {
          lastDroppedItem: {
            $set: item,
          },
        },
      },
      droppedBoxNames: name ? {
        $push: [name],
      } : {},
    }));
  }
}

var Container = React.createClass({

  // Here we render the component
  render: function () {
    return (
      <div className="row">
        <div className="col-sm-12">
          <div className="panel panel-primary">
            <div className="panel-heading">
              <h3 className="panel-title text-center">Playable Pieces</h3>
              <button type="button" id="resetPieces" className="btn btn-danger btn-sm">Reset All Pieces</button>
              <p>Correct places: <span id="right">0</span></p>
              <p>Incorrect places: <span id="wrong">0</span></p>
              <div className="panel-body">

                <img id="satBlueBig" className="big piece" data-shape="sat" data-color="blue" data-size="big" data-spot="false" data-placed="false" src="./images/sat.gif" />
                <img id="alienGreenSmall" className="small piece" data-shape="alien" data-color="green" data-size="small" data-spot="false" data-placed="false" src="./images/alien.gif" />
                <img id="sunRedBig" className="big piece" data-shape="sun" data-color="red" data-size="big" data-spot="false" data-placed="false" src="./images/sun.gif" />
                <img id="sunBlueSmall" className="small piece" data-shape="sun" data-color="blue" data-size="small" data-placed="false" src="./images/sun.gif" />

                <img id="alienGreenBig" className="big piece" data-shape="alien" data-color="green" data-size="big" data-placed="false" src="./images/alien.gif" />
                <img id="satBlueSmall" className="small piece" data-shape="sat" data-color="blue" data-size="small" data-placed="false" src="./images/sat.gif" />
                <img id="sunGreenBig" className="big piece" data-shape="sun" data-color="green" data-size="big" data-placed="false" src="./images/sun.gif" />
                <img id="alienRedSmall" className="small piece" data-shape="alien" data-color="red" data-size="small" data-placed="false" src="./images/alien.gif" />

                <img id="alienBlueBig" className="big piece" data-shape="alien" data-color="blue" data-size="big" data-placed="false" src="./images/alien.gif" />
                <img id="satGreenSmall" className="small piece" data-shape="sat" data-color="green" data-size="small" data-placed="false" src="./images/sat.gif" />
                <img id="satRedBig" className="big piece" data-shape="sat" data-color="red" data-size="big" data-placed="false" src="./images/sat.gif" />
                <img id="sunRedSmall" className="small piece" data-shape="sun" data-color="red" data-size="small" data-spot="false" data-placed="false" src="./images/sun.gif" />

              </div>
            </div>
          </div>
        </div>

        {this.props.children}

      </div>

    );
  }
});
});
module.exports = Container;