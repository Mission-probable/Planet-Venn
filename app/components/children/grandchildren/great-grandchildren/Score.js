import React, {Component} from 'react';
import { Row, Col } from "react-grid-system";
import FlatButton from 'material-ui/FlatButton';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import Snackbar from 'material-ui/Snackbar';
import TextField from 'material-ui/TextField';

class Score extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value1: 1,
            value2: 2,
            message: getMessage(),
            action: 'PLAY AGAIN?',
            open: false,
        };
        this.handleDropDown1Change = this.handleDropDown1Change.bind(this);
        this.handleDropDown2Change = this.handleDropDown2Change.bind(this);
        this.handleTouchTap = this.handleTouchTap.bind(this);
        this.handleActionTouchTap = this.handleActionTouchTap.bind(this);
        this.handleRequestClose = this.handleRequestClose.bind(this);
    }

    componentDidMount() {
        startGame();
    }
        
    handleDropDown1Change(event, index, value) {
        return (
            this.setState({ value1: value })
        )
    }

    handleDropDown2Change(event, index, value) {
        return (
            this.setState({ value2: value })
        )
    }

    // For the snackbar component
    handleTouchTap() {
        this.setState({
        open: true,
        });
    }

    // IF THE USER GUESSED CORRECTLY
    handleActionTouchTap() {
        this.setState({
        open: false,
        });
        playAgain();
    }

    handleRequestClose() {
        this.setState({ open: false, });
    }

    render() {
        return (
            <div>
                <div id="score-container">

                    <h2>Moves: <span id="moves">0</span></h2>

                </div>
                <div id="make-a-guess">
                    <Row>
                            
                        <Col sm={4}>
                            <DropDownMenu id="rule1guess" value={this.state.value1} onChange={this.handleDropDown1Change}>
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

                        <Col sm={4}>

                            <FlatButton onTouchTap={this.handleTouchTap} label="Guess" id="guesstherules" className="button-spacing" />
                            <Snackbar open={this.state.open} message={this.state.message} action={this.state.action} onActionTouchTap={this.handleActionTouchTap} onRequestClose={this.handleRequestClose} />
                        </Col>

                        <Col sm={4}>
                            <DropDownMenu id="rule2guess" value={this.state.value2} onChange={this.handleDropDown2Change}>
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
            </div> 
        )
    }   
};

export default Score;