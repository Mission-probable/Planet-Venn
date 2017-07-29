import React, {Component} from 'react';
import { Row, Col } from 'react-grid-system';
import FlatButton from 'material-ui/FlatButton';
import SelectField from 'material-ui/SelectField';
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
    handleTouchTap() { this.setState({ open: true, });
    }

    // IF THE USER GUESSED CORRECTLY
    handleActionTouchTap() {
        this.setState({ open: false, });
        playAgain();
    }

    handleRequestClose() {
        this.setState({ open: false, });
    }

    render() {
        const categories = [
            <MenuItem key={1} value={1} primaryText="Red" />,
            <MenuItem key={2} value={2} primaryText="Green" />,
            <MenuItem key={3} value={3} primaryText="Blue" />,
            <MenuItem key={4} value={4} primaryText="Satellite" />,
            <MenuItem key={5} value={5} primaryText="Alien" />,
            <MenuItem key={6} value={6} primaryText="Sun" />,
            <MenuItem key={7} value={7} primaryText="Big" />,
            <MenuItem key={8} value={8} primaryText="Small" />
        ];

        return (
            <div>
                <div id="score-container">

                    <h2>Moves: <span id="moves">0</span></h2>

                </div>
                <div id="make-a-guess">
                    <Row>
                            
                        <Col sm={6}>
                            <SelectField id="rule1guess" value={this.state.value1} onChange={this.handleDropDown1Change}style={{width: "80%", height: "60px"}}>
                                {categories}
                            </SelectField>
                        </Col>

                        <Col sm={6}>
                            <SelectField id="rule2guess" value={this.state.value2} onChange={this.handleDropDown2Change} style={{width: "80%", height: "60px"}}>
                                {categories} 
                            </SelectField>
                        </Col>   
                    </Row>
                    <FlatButton onTouchTap={this.handleTouchTap} label="Make my Guess" id="guesstherules" />
                            <Snackbar open={this.state.open} message={this.state.message} action={this.state.action} onActionTouchTap={this.handleActionTouchTap} onRequestClose={this.handleRequestClose} />
                </div>  
            </div> 
        )
    }   
};

export default Score;