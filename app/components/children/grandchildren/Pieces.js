// Include React
import React from "react";
var Link = require("react-router").Link;

// Moon - Red - Big
// Star - Green - Small
// Comet - Blue - Big
// Moon - Red - Small
// Star - Green - Big
// Comet - Blue - Small
// Moon - Green - Big
// Star - Red - Small
// Comet - Red - Big
// Moon - Blue - Small
// Star - Blue - Big
// Comet - Green - Small

var Pieces = React.createClass({

  // Here we render the component
		render: function() {
				return (
						<div className="row">
								<div className="col-sm-3">
										<div className="panel panel-primary">
												<div className="panel-heading">
														<h3 className="panel-title text-center">Playable Pieces</h3>
														<button type="button" id="resetPieces" className="btn btn-danger btn-sm">Reset All Pieces</button>
														<p>Correct places: <span id="right">0</span></p>
														<p>Incorrect places: <span id="wrong">0</span></p>
														<div className="panel-body">
														
																<img id="1" className="big piece" data-shape="circle" data-color="red" data-size="big" data-spot="false" data-placed="false" src="./images/m_red.png" />
																<img id="2" className="small piece" data-shape="star" data-color="green" data-size="small" data-spot="false" data-placed="false" src="./images/s_green.png" />
																<img id="3" className="big piece" data-shape="box" data-color="blue" data-size="big" data-spot="false" data-placed="false" src="./images/c_blue.png" />
																<img id="4" className="small piece" data-shape="circle" data-color="red" data-size="small" data-spot="false" data-placed="false" src="./images/m_red.png" />

																<img id="5" className="big piece" data-shape="star" data-color="green" data-size="big" data-placed="false" src="./images/s_green.png" />
																<img id="6" className="small piece" data-shape="box" data-color="blue" data-size="small" data-placed="false" src="./images/c_blue.png" />
																<img id="7" className="big piece" data-shape="circle" data-color="green" data-size="big" data-placed="false" src="./images/m_green.png" />
																<img id="8" className="small piece" data-shape="star" data-color="red" data-size="small" data-placed="false" src="./images/s_red.png" />

																<img id="9" className="big piece" data-shape="box" data-color="red" data-size="big" data-placed="false" src="./images/c_red.png" />
																<img id="10" className="small piece" data-shape="circle" data-color="blue" data-size="small" data-placed="false" src="./images/m_blue.png" />
																<img id="11" className="big piece" data-shape="star" data-color="blue" data-size="big" data-placed="false" src="./images/s_blue.png" />
																<img id="12" className="small piece" data-shape="box" data-color="green" data-size="small" data-placed="false" src="./images/c_green.png" />

														</div>
												</div>
										</div>
								</div>

								<div className="col-sm-4">
										
										<img id="category1" data-rule="TBD" alreadyPlaced="false" src="./images/emptybox.gif" />
										<h1>NONE OF THE ABOVE</h1>
										<img id="category4" alreadyPlaced="false" src="./images/emptybox.gif" />
								</div>
								<div className="col-sm-2">
									
										<img id="category3" alreadyPlaced="false" src="./images/emptybox.gif" />
								</div>
								<div className="col-sm-2">
									
										<img id="category2" data-rule="TBD" alreadyPlaced="false" src="./images/emptybox.gif" />
								</div>

								{this.props.children}

						</div>

				);
		}
});

// Export the component back for use in other files
module.exports = Pieces;
