// dependency
var React = require('react');

var Board = React.createClass({
    render: function () {
        return (
            <div>
                <div className="row">
                    <div className="col-sm-4">
                        <h4 className="text-center">Category 1</h4>
                        <div className="welly" id="category1" data-rule="red" alreadyPlaced="false" />
                    </div>

                    <div className="col-sm-4">
                        <h4 className="text-center">Both</h4>
                        <div className="welly" id="category3" data-rule="TBD" alreadyPlaced="false" />
                    </div>

                    <div className="col-sm-4">
                        <h4 className="text-center">Category 2</h4>
                        <div className="welly" id="category2" data-rule="sun" alreadyPlaced="false" />
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-12">
                        <div className="welly" id="category4" data-rule="TBD" alreadyPlaced="false" />
                        <h4 className="text-center">Does Not Belong</h4>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-8">   
                        <h3>Rule 1 Guess</h3>
                        <select id="rule1guess">
                            <option value="red">Red</option>
                            <option value="green">Green</option>
                            <option value="blue">Blue</option>
                            <option value="sat">Satellite</option>
                            <option value="alien">Alien</option>
                            <option value="sun">Sun</option>
                            <option value="big">Big</option>
                            <option value="small">Small</option>
                        </select>
                    </div>
                
                    <div className="col-sm-4"> 
                        <h3>Rule 2 Guess</h3>
                        <select id="rule2guess">
                            <option value="red">Red</option>
                            <option value="green">Green</option>
                            <option value="blue">Blue</option>
                            <option value="sat">Satellite</option>
                            <option value="alien">Alien</option>
                            <option value="sun">Sun</option>
                            <option value="big">Big</option>
                            <option value="small">Small</option>
                        </select>
                    </div>
                </div>

                <div className="row">
                    <div className="col align-self-center">
                        <button type="button" id="guesstherules">Guess the Rules</button>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Board;

