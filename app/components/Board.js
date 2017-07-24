import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';


var Board = React.createClass({
    getInitialState: function() {
        return (
            { value: "" }
        )
    },

    handleDropDownChange: function(event, index, value) {
        return (
            this.setState({ value: value })
        )
    },
    
    render: function () {
        return (
            <div className="container">
                
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
                
                <RaisedButton type="button" label="Make a Guess" id="guesstherules" />
                
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
           
                

                <div id="venn">
                    
                    <div className="welly" id="category1" data-rule="red" alreadyPlaced="false"></div>
                    
                    <div className="welly" id="category3" data-rule="TBD" alreadyPlaced="false"></div>
                       
                    <div className="welly" id="category2" data-rule="sun" alreadyPlaced="false"></div>
                    
                </div>
              
                <div>
                    <div>
                       
                        <div className="wellys" id="category5" data-rule="TBD" alreadyPlaced="false"></div>
                        <img id="category4" data-rule="TBD" alreadyPlaced="false" src="./images/blackhole2.gif" />
                        
                    </div>
        
                   
                </div>
           </div>
        );
    }
});

module.exports = Board;

