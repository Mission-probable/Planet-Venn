import React from 'react';
import { Row, Col } from "react-grid-system";

var Board = React.createClass({
   
    render: function () {
        return (
            <div className="container">
              
                <Row>
                    <div id="venn">
                        
                        <div id="category1" data-rule="red" alreadyPlaced="false"></div>
                        
                        <div id="category3" data-rule="TBD" alreadyPlaced="false"></div>
                        
                        <div id="category2" data-rule="sun" alreadyPlaced="false"></div>
                        
                    </div>
                </Row>
              
                <div>
                    <div>
                       
                        <div id="category5" data-rule="TBD" alreadyPlaced="false"></div>
                        <img id="category4" data-rule="TBD" alreadyPlaced="false" src="./images/blackhole2.gif" />
                        
                    </div>
        
                   
                </div>
           </div>
        );
    }
});

module.exports = Board;

