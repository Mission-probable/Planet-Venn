import React, {Component} from 'react';
import { Row, Col } from "react-grid-system";
import update from 'react/lib/update';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';
import ItemTypes from '../../utils/ItemTypes';
import PropTypes from 'prop-types';

import Pieces from './grandchildren/Pieces';
import Board from './grandchildren/Board';
import Options from './grandchildren/Options';

//dumb component
const GameSpace = () => {    
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
};

export default GameSpace;
