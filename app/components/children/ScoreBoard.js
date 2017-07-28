import React, {Component} from 'react';
import { Row, Col } from 'react-grid-system';

const highScores = [
    { name: 'Stuart', score: '1', date: '7/28/17' },
    { name: 'Maria', score: '3', date: '7/28/17' },
    { name: 'Mary', score: '5', date: '7/28/17' },
    { name: 'Michael', score: '7', date: '7/28/17' },
    { name: 'Rudy', score: '9', date: '7/28/17' },
];

class ScoreBoard extends Component {
    render() {
        return (
            <div id="scoreboard-container">
                <div className="highScores">HIGH SCORES</div>
                <Row id="rowDesc">
                    <Col id="nameField" sm={4}>
                        <div>NAME</div>
                    </Col>
                    <Col sm={4}>
                        <div>SCORE</div>
                    </Col>
                    <Col sm={4}>
                        <div>DATE</div>
                    </Col>
                </Row>

                {highScores.map( (row, index) => (
                   <Row key={index}>
                        <Col sm={4}>
                            <div id="nameField">{row.name}</div>
                        </Col>
                        <Col sm={4}>
                            <div>{row.score}</div>
                        </Col>
                        <Col sm={4}>
                            <div>{row.date}</div>
                        </Col>
                     </Row>
                ))}
  
            </div>
        )
    }
};

export default ScoreBoard;