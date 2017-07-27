import React, {Component} from 'react';
import { Row, Col } from 'react-grid-system';

class ScoreBoard extends Component {
    render() {
        return (
            <div id="scoreboard-container">
                
                    <h2>Top Scores</h2>
                    <Row>
                        <Col sm={6}>
                            <h3>Player Name</h3>
                        </Col>
                        <Col sm={3}>
                            <h3>Score</h3>
                        </Col>
                        <Col sm={3}>
                            <h3>Date?</h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={6}>
                            <h3>Player Name</h3>
                        </Col>
                        <Col sm={3}>
                            <h3>Score</h3>
                        </Col>
                        <Col sm={3}>
                            <h3>Date?</h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={6}>
                            <h3>Player Name</h3>
                        </Col>
                        <Col sm={3}>
                            <h3>Score</h3>
                        </Col>
                        <Col sm={3}>
                            <h3>Date?</h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={6}>
                            <h3>Player Name</h3>
                        </Col>
                        <Col sm={3}>
                            <h3>Score</h3>
                        </Col>
                        <Col sm={3}>
                            <h3>Date?</h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={6}>
                            <h3>Player Name</h3>
                        </Col>
                        <Col sm={3}>
                            <h3>Score</h3>
                        </Col>
                        <Col sm={3}>
                            <h3>Date?</h3>
                        </Col>
                    </Row>   
                    <Row>
                        <Col sm={6}>
                            <h3>Player Name</h3>
                        </Col>
                        <Col sm={3}>
                            <h3>Score</h3>
                        </Col>
                        <Col sm={3}>
                            <h3>Date?</h3>
                        </Col>
                    </Row>
          
            </div>
        )
    }
};

export default ScoreBoard;