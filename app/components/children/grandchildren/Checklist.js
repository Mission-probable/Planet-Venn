
// dependency
var React = require("react");

var Checklist = React.createClass({

    render: function() {
		return (
			<div className="row">
				<div className="col-sm-12">
					<div className="panel panel-primary">
						<div className="panel-heading checklistDiv ">
							<h3 className="panel-title text-center">Help Card (Optional)</h3>
							<button type="button" className="btn btn-danger btn-sm">Reset All Cells</button>
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
										    <td></td> 
										    <td></td>
									   	</tr>
									   	<tr>
										    <td> Blue </td>
										    <td></td> 
										    <td></td>
									   	</tr>
									   	<tr>
										    <td> Green </td>
										    <td></td> 
										    <td></td>
									   	</tr>
									   	<tr>
										    <td> Satellite </td>
										    <td></td> 
										    <td></td>
									   	</tr>
									   	<tr>
										    <td> Planet </td>
										    <td></td> 
										    <td></td>
									   	</tr>
									   	<tr>
										    <td> Alien </td>
										    <td></td> 
										    <td></td>
									   	</tr>
									   	<tr>
										    <td> Big </td>
										    <td></td> 
										    <td></td>
									   	</tr>
									   	<tr>
										    <td> Little </td>
										    <td></td> 
										    <td></td>
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

