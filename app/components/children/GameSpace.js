import React, {Component} from 'react';
import { Row, Col } from "react-grid-system";

import Play from './grandchildren/Play';
import Board from './grandchildren/Board';

class GameSpace extends Component{
    
    render() {
        return (
            <div>                
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
};

export default GameSpace;
