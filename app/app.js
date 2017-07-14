// dependencies
var React = require("react");
var ReactDOM = require("react-dom");

// grabs the routes
var routes = require("./config/routes");

// renders the contents according to the route page
ReactDOM.render(routes, document.getElementById("app"));
