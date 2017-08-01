import React, {Component} from 'react';
import { Row, Col } from "react-grid-system";

//dumb component
const Board = () => {
    return (
        <div>   
            <Row>
                <div id="venn">                    
                    <div id="category1" data-rule="red" data-placed="false"></div>
                    
                    <div id="category3" data-rule="TBD" data-placed="false"></div>
        
                    <div id="category2" data-rule="sun" data-placed="false"></div>           
                </div>
            </Row>           
            <div>
                <div>
                    
                    <div id="category5" data-rule="TBD" data-placed="false"></div>
                    
                    <img id="category4" data-rule="TBD" data-placed="false" src="./images/blackhole2.gif" />                 
                </div>     
            </div>
        </div>
    );
};

export default Board;

