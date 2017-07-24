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
                value: ""
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
                
                <Row>
                    <Col sm={3}>
                        <RaisedButton label="Use Checklist"  onTouchTap={this.handleDrawerToggle} />
                        <Drawer open={this.state.open} openSecondary={true} >
                            <Checklist />
                        </Drawer>
                    </Col>
                    <Col sm={2}>
                    <DropDownMenu id="rule1guess" value={this.state.value} onChange={this.handleChange}>
                        <MenuItem value={"red"} primaryText="Red" />
                        <MenuItem value={"green"} primaryText="Green" />
                        <MenuItem  value={"blue"} primaryText="Blue" />
                        <MenuItem  value={"sat"} primaryText="Satellite" />
                        <MenuItem  value={"alien"} primaryText="Alien" />
                        <MenuItem  value={"sun"} primaryText="Sun" />
                        <MenuItem  value={"big"} primaryText="Big" />
                        <MenuItem  value={"small"} primaryText="Small" />
                    </DropDownMenu>
                    </Col>
                    <Col sm={2}>
                     <RaisedButton type="button" label="Make a Guess" id="guesstherules" />
                    </Col>
                    <Col sm={2}>
                        <DropDownMenu id="rule2guess" value={this.state.value} onChange={this.handleChange}>
                            <MenuItem value={"red"} primaryText="Red" />
                            <MenuItem value={"green"} primaryText="Green" />
                            <MenuItem  value={"blue"} primaryText="Blue" />
                            <MenuItem  value={"sat"} primaryText="Satellite" />
                            <MenuItem  value={"alien"} primaryText="Alien" />
                            <MenuItem  value={"sun"} primaryText="Sun" />
                            <MenuItem  value={"big"} primaryText="Big" />
                            <MenuItem  value={"small"} primaryText="Small" />
                        </DropDownMenu>
                        
                    </Col>
                </Row>

                <Row>
                    <Col sm={3}>
                        <Pieces />
                    </Col>
                    <Col sm={1}>
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
