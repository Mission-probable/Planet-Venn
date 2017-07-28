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



//     const styles = {
//   propContainer: { width: 200, overflow: 'hidden', margin: '20px auto 0', },
//   propToggleHeader: { margin: '20px auto 10px', },
// };
            

//     class ScoreBoard extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             fixedHeader: true,
//             fixedFooter: true,
//             stripedRows: false,
//             showRowHover: false,
//             selectable: true,
//             multiSelectable: false,
//             enableSelectAll: false,
//             deselectOnClickaway: true,
//             showCheckboxes: false,
//             height: '200px',
//         };
//     }

//             <Table height={this.state.height} fixedHeader={this.state.fixedHeader} fixedFooter={this.state.fixedFooter} selectable={this.state.selectable} multiSelectable={this.state.multiSelectable} >
//                 <TableHeader displaySelectAll={this.state.showCheckboxes} adjustForCheckbox={this.state.showCheckboxes} enableSelectAll={this.state.enableSelectAll} >
//                     <TableRow>
//                         <TableHeaderColumn colSpan="3" tooltip="Super Header" style={{textAlign: 'center'}}>
//                             HIGH SCORES
//                         </TableHeaderColumn>
//                     </TableRow>
//                     <TableRow>
//                         <TableHeaderColumn tooltip="The Name">Name</TableHeaderColumn>
//                         <TableHeaderColumn tooltip="The Score">Score</TableHeaderColumn>
//                         <TableHeaderColumn tooltip="The Date">Date</TableHeaderColumn>
//                     </TableRow>
//                 </TableHeader>
//                 <TableBody displayRowCheckbox={this.state.showCheckboxes} deselectOnClickaway={this.state.deselectOnClickaway} showRowHover={this.state.showRowHover} stripedRows={this.state.stripedRows} >
//                     {tableData.map( (row, index) => (
//                         <TableRow key={index}>
//                             <TableRowColumn>{row.name}</TableRowColumn>
//                             <TableRowColumn>{row.score}</TableRowColumn>
//                             <TableRowColumn>{row.date}</TableRowColumn>
//                         </TableRow>
//                     ))}
//                 </TableBody>
//             </Table>