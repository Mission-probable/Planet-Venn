var React = require("react");

var Checklist = React.createClass({
	handleClick: function(event) {
		console.log("inside handleClick in checklist");
    	// prevents default submission
  	  	event.preventDefault();
  	  	// clears input fields
  	  	var inputs = document.getElementsByTagName("input");
    	for(var i=0;i<inputs.length;i++) {
        	inputs[i].value = '';
    	}
  	},
    render: function() {
		return (
			<div className="row">
				<div className="col-sm-12">
					<div className="panel panel-primary">
						<div className="panel-heading checklistDiv ">
							<h3 className="panel-title text-center">Help Card (Optional)</h3>
							<button type="button" className="btn btn-danger btn-sm" onClick={this.handleClick}>Reset All Cells</button>
							<p>Click cells to place an X if that category is incorrect.</p>
							<div className="tablePanel panel-body">
								<table>
									<thead>
									   	<tr>
										    <th></th>
										    <th id="left">Left</th> 
										    <th>Right</th>
									   	</tr>
									</thead>
									<tbody>
									   	<tr>
										    <td> Red </td>
										    <td className="cell"> <input type="text"/> </td> 
										    <td className="cell"> <input type="text"/> </td>
									   	</tr>
									   	<tr>
										    <td> Blue </td>
										    <td className="cell"> <input type="text"/> </td> 
										    <td className="cell"> <input type="text"/> </td>
									   	</tr>
									   	<tr>
										    <td> Green </td>
										    <td className="cell"> <input type="text"/> </td> 
										    <td className="cell"> <input type="text"/> </td>
									   	</tr>
									   	<tr>
										    <td> Satellite </td>
										    <td className="cell"> <input type="text"/> </td> 
										    <td className="cell"> <input type="text"/> </td>
									   	</tr>
									   	<tr>
										    <td> Planet </td>
										    <td className="cell"> <input type="text"/> </td> 
										    <td className="cell"> <input type="text"/> </td>
									   	</tr>
									   	<tr>
										    <td> Alien </td>
										    <td className="cell"> <input type="text"/> </td> 
										    <td className="cell"> <input type="text"/> </td>
									   	</tr>
									   	<tr>
										    <td> Big </td>
										    <td className="cell"> <input type="text"/> </td> 
										    <td className="cell"> <input type="text"/> </td>
									   	</tr>
									   	<tr>
										    <td> Little </td>
										    <td className="cell"> <input type="text"/> </td> 
										    <td className="cell"> <input type="text"/> </td>
									   	</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
});

module.exports = Checklist;

