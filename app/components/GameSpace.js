import React from 'react';
import { Row, Col } from "react-grid-system";
import Drawer from 'material-ui/Drawer';
import RaisedButton from 'material-ui/RaisedButton';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

import Pieces from './Pieces';
import Board from './Board';
import Checklist from './Checklist';


var GameSpace = React.createClass({
    getInitialState: function() {
        return (
            { 
                open: false,
                value: 1
            }
        )
    },

    handleDropDownChange: function(event, index, value) {
        return (
            this.setState({ value: value })
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
                <div id="button-row">
                    <Row>
                        <Col sm={2}>

                            <RaisedButton label="Reset Pieces" type="button" id="resetPieces" />
                        </Col>
                        <Col sm={2}>
                            <RaisedButton label="Use Checklist"  onTouchTap={this.handleDrawerToggle} />
                            <Drawer open={this.state.open} openSecondary={true} >
                                <Checklist />
                            </Drawer>
                        </Col>
                        <Col sm={1} />
                        <Col sm={1}>
                        <DropDownMenu id="rule1guess" value={this.state.value} onChange={this.handleDropDownChange}>
                            <MenuItem value={1} primaryText="Red" />
                            <MenuItem value={2} primaryText="Green" />
                            <MenuItem  value={3} primaryText="Blue" />
                            <MenuItem  value={4} primaryText="Satellite" />
                            <MenuItem  value={5} primaryText="Alien" />
                            <MenuItem  value={6} primaryText="Sun" />
                            <MenuItem  value={7} primaryText="Big" />
                            <MenuItem  value={8} primaryText="Small" />
                        </DropDownMenu>
                        </Col>

                        <Col sm={2}>
                        <RaisedButton type="button" label="Make a Guess" id="guesstherules" />
                        </Col>

                        <Col sm={1}>
                               <DropDownMenu id="rule2guess" value={this.state.value} onChange={this.handleDropDownChange}>
                            <MenuItem value={1} primaryText="Red" />
                            <MenuItem value={2} primaryText="Green" />
                            <MenuItem  value={3} primaryText="Blue" />
                            <MenuItem  value={4} primaryText="Satellite" />
                            <MenuItem  value={5} primaryText="Alien" />
                            <MenuItem  value={6} primaryText="Sun" />
                            <MenuItem  value={7} primaryText="Big" />
                            <MenuItem  value={8} primaryText="Small" />
                        </DropDownMenu>
                            
                        </Col>
                    </Row>
                </div>
                
                <Row>
                    <Col sm={4}>
                        <Pieces />
                    </Col>
                  
                    <Col sm={8}>
                        <Board />
                    </Col>
                </Row>
            </div>
        );
    }
});

module.exports = GameSpace;
