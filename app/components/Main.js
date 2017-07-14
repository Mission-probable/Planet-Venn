
var React = require("react");

// var Header = require("./children/Header");
// var Footer = require("./children/Footer");

var helpers = require("../utils/helpers.js");

var Main = React.createClass({
	  render: function () {
	    return (
	      	<div className="mainContainer">

              <Header />

              <Footer />
              
	      	</div>
	    );
  	}
});

