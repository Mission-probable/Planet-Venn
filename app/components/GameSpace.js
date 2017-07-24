import React from 'react';
import { Row, Col } from "react-grid-system";
import Drawer from 'material-ui/Drawer';
import RaisedButton from 'material-ui/RaisedButton';

import Pieces from './Pieces';
import Board from './Board';
import Checklist from './Checklist';


var GameSpace = React.createClass({
    getInitialState: function() {
        return (
            { open: false }
        )
    },

    handleDrawerToggle: function() {
        return(
            this.setState({ open: !this.state.open})
        )
    },

    render: function () {
        return (
            <div className="container">
                <Row>
                    <Col sm={3}>
                        <Pieces />
                    </Col>

                    <Col sm={9}>

                <RaisedButton label="Checklist" onTouchTap={this.handleDrawerToggle} />
                <Drawer openSecondary={true} open={this.state.open} >
                    <Checklist />
                </Drawer>

                        <Board />

                    </Col>
   
                </Row>
            </div>
    );
  }
});

module.exports = GameSpace;
