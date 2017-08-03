import React, {Component} from 'react';
import { Row, Col } from 'react-grid-system';
import axios from 'axios';
import moment from 'moment';

class ScoreBoard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            highScores: [
                { name: "", score: "", date: "" },
            ]
        }
    }

    componentDidMount() {
        axios.get("/api/scores/")
        .then(function (response) {
            (response.data).sort(function (a, b) {
                return a.score - b.score;
            });
            console.log(response.data);
            this.setState({
                highScores: [
                    { name: response.data[0].name, score: response.data[0].score, date: moment(response.data[0].date).format('MMMM Do, YYYY') },
                    { name: response.data[1].name, score: response.data[1].score, date: moment(response.data[1].date).format('MMMM Do, YYYY') },
                    { name: response.data[2].name, score: response.data[2].score, date: moment(response.data[2].date).format('MMMM Do, YYYY') },
                    { name: response.data[3].name, score: response.data[3].score, date: moment(response.data[3].date).format('MMMM Do, YYYY') },
                    { name: response.data[4].name, score: response.data[4].score, date: moment(response.data[4].date).format('MMMM Do, YYYY') },
                ]
            })
        }.bind(this))
    }

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
                {this.state.highScores.map( (row, index) => (
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