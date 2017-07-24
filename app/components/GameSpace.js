import React from 'react';
import { Row, Col } from "react-grid-system";

import Pieces from './Pieces';
import Board from './Board';


var GameSpace = React.createClass({

    render: function () {
        return (
            <div className="container">
                <Row>
                    <Col sm={3}>
                        <Pieces />
                    </Col>

                    <Col sm={9}>
                        <Board />
                    </Col>
   
                </Row>
            </div>
    );
  }
});

module.exports = GameSpace;
