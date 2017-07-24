import React from 'react';
import { Row, Col } from "react-grid-system";

import Pieces from './Pieces';
import Board from './Board';
import Checklist from './Checklist';

var GameSpace = React.createClass({
  render: function () {
    return (
        <div class="container">
            <Row>
                <Col sm={3}>
                    <Pieces />
                </Col>

                <Col sm={9}>
                    <Board />
                </Col>
            </Row>

            <div id="checklist-container">
            <Checklist />
            </div>

      </div>
    );
  }
});

module.exports = GameSpace;
