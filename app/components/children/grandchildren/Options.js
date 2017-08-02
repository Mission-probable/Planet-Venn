import React, {Component} from 'react';
import { Row, Col } from "react-grid-system";
import Drawer from 'material-ui/Drawer';
import FlatButton from 'material-ui/FlatButton';
import DropDownMenu from 'material-ui/DropDownMenu';  
import Dialog from 'material-ui/Dialog'; 

import Rules from './Rules';
import Checklist from './Checklist';
 
class Options extends Component {
    constructor(props) {
        super(props);
        this.state = {
            drawerOpen: false,
            rulesOpen: false,
        };
        this.handleDrawerToggle = this.handleDrawerToggle.bind(this);
        this.handleRulesOpen = this.handleRulesOpen.bind(this);
        this.handleRulesClose = this.handleRulesClose.bind(this);
    }

    handleDrawerToggle() {
        return(
            this.setState({ drawerOpen: !this.state.drawerOpen})
        )
    }

    handleRulesOpen() {
        return(
            this.setState({ rulesOpen: true })
        )
    }

    handleRulesClose() {
        return(
            this.setState({ rulesOpen: false })
        )
    }
   
    render() {
        return (
            <div id="button-container">

                <Row>  
                    <Col sm={2} />
                     <Col sm={3}>
                        <FlatButton label="Rules"  onTouchTap={this.handleRulesOpen} primary={true} />
                        <Dialog  actions={<FlatButton label="Close Rules" primary={true} onTouchTap={this.handleRulesClose} />} modal={false} open={this.state.rulesOpen} onRequestClose={this.handleRulesClose} >
                            <Rules />
                        </Dialog>
                    </Col>
                    <Col sm={2} />
                    <Col sm={3}>
                        <FlatButton label="Checklist"  onTouchTap={this.handleDrawerToggle} primary={true} />
                        <Drawer open={this.state.drawerOpen} openSecondary={true} >
                            <Checklist />
                        </Drawer>
                    </Col>
                    <Col sm={2} />
                </Row>
            </div>
        )
    }    
};

export default Options;