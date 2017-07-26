import React from 'react';
import { Row, Col } from "react-grid-system";

import Play from './grandchildren/Play';
import Board from './grandchildren/Board';

var GameSpace = React.createClass({
    
    render: function () {
        return (
            <div className="container">                
                <Row>
                    <Col sm={3}>
                        <Play />
                    </Col>
                  
                    <Col sm={9}>
                        <Board />
                    </Col>
                </Row>
            </div>
        );
    }
});

export default GameSpace;
