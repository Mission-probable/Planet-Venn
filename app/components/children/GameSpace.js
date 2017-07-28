import React, {Component} from 'react';
import { Row, Col } from "react-grid-system";

import Pieces from './grandchildren/Pieces';
import Board from './grandchildren/Board';
import Options from './grandchildren/Options';

class GameSpace extends Component{
    
    render() {
        return (
            <div>                
                <Row>
                    <Col sm={4}>
                        <Pieces />
                    </Col>
                  
                    <Col sm={8}>
                        <Board />
                    </Col>
                </Row>
                <Options />
            </div>
        );
    }
};

export default GameSpace;
