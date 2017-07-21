var React = require("react");

var Checklist = React.createClass({
	handleClick: function(event) {
		console.log("inside handleClick in checklist");
    	// prevents default submission
  	  	event.preventDefault();
  	  	// clears input fields
  	  	var inputs = document.getElementsByTagName("input");
		for(var i = 0; i < inputs.length; i++) {
    		if(inputs[i].type == "checkbox") {
        		inputs[i].checked = false; 
    		}  
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
										    <th id="left">Category 1</th> 
										    <th>Category 2</th>
									   	</tr>
									</thead>
									<tbody>
									   	<tr>
										    <td> Red </td>
										    <td className="cell">
												<div className="pretty plain o-danger smooth a-jelly">
  													<input type="checkbox" /> 
  														<label><i className="g-mdi" data-icon="clear"></i> </label>
												</div>
											</td> 
										    <td className="cell">
												<div className="pretty plain o-danger smooth a-jelly">
  													<input type="checkbox" /> 
  														<label><i className="g-mdi" data-icon="clear"></i> </label>
												</div>
											</td>
									   	</tr>
									   	<tr>
										    <td> Blue </td>
										    <td className="cell">
												<div className="pretty plain o-danger smooth a-jelly">
  													<input type="checkbox" /> 
  													<label><i className="g-mdi" data-icon="clear"></i> </label>
												</div>
											</td> 
										    <td className="cell">
												<div className="pretty plain o-danger smooth a-jelly">
  													<input type="checkbox" /> 
  													<label><i className="g-mdi" data-icon="clear"></i> </label>
												</div>
											</td>
									   	</tr>
									   	<tr>
										    <td> Green </td>
										    <td className="cell">
												<div className="pretty plain o-danger smooth a-jelly">
  													<input type="checkbox" /> 
  													<label><i className="g-mdi" data-icon="clear"></i> </label>
												</div>
											</td>
										    <td className="cell">
												<div className="pretty plain o-danger smooth a-jelly">
  													<input type="checkbox" /> 
  													<label><i className="g-mdi" data-icon="clear"></i> </label>
												</div>
											</td>
									   	</tr>
									   	<tr>
										    <td> Satellite </td>
										    <td className="cell">
												<div className="pretty plain o-danger smooth a-jelly">
  													<input type="checkbox" /> 
  													<label><i className="g-mdi" data-icon="clear"></i> </label>
												</div>
											</td> 
										    <td className="cell">
												<div className="pretty plain o-danger smooth a-jelly">
  													<input type="checkbox" /> 
  													<label><i className="g-mdi" data-icon="clear"></i> </label>
												</div>
											</td>
									   	</tr>
									   	<tr>
										    <td> Sun </td>
										    <td className="cell">
												<div className="pretty plain o-danger smooth a-jelly">
  													<input type="checkbox" /> 
  													<label><i className="g-mdi" data-icon="clear"></i> </label>
												</div>
											</td> 
										    <td className="cell">
												<div className="pretty plain o-danger smooth a-jelly">
  													<input type="checkbox" /> 
  													<label><i className="g-mdi" data-icon="clear"></i> </label>
												</div>
											</td>
									   	</tr>
									   	<tr>
										    <td> Alien </td>
										    <td className="cell">
												<div className="pretty plain o-danger smooth a-jelly">
  													<input type="checkbox" /> 
  													<label><i className="g-mdi" data-icon="clear"></i> </label>
												</div>
											</td> 
										    <td className="cell">
												<div className="pretty plain o-danger smooth a-jelly">
  													<input type="checkbox" /> 
  													<label><i className="g-mdi" data-icon="clear"></i> </label>
												</div>
											</td>
									   	</tr>
									   	<tr>
										    <td> Big </td>
										    <td className="cell">
												<div className="pretty plain o-danger smooth a-jelly">
  													<input type="checkbox" /> 
  													<label><i className="g-mdi" data-icon="clear"></i> </label>
												</div>
											</td> 
										    <td className="cell">
												<div className="pretty plain o-danger smooth a-jelly">
  													<input type="checkbox" /> 
  													<label><i className="g-mdi" data-icon="clear"></i> </label>
												</div>
											</td>
									   	</tr>
									   	<tr>
										    <td> Little </td>
										    <td className="cell">
												<div className="pretty plain o-danger smooth a-jelly">
  													<input type="checkbox" /> 
  													<label><i className="g-mdi" data-icon="clear"></i> </label>
												</div>
											</td> 
										    <td className="cell">
												<div className="pretty plain o-danger smooth a-jelly">
  													<input type="checkbox" /> 
  													<label><i className="g-mdi" data-icon="clear"></i> </label>
												</div>
											</td>
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

