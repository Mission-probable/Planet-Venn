var React = require("react");
import {Link} from "react-router";
import {FormGroup, FormControl, ControlLabel} from "react-bootstrap";

// components
var Nav = require("./grandchildren/Nav");
var Footer = require("./grandchildren/Footer");

var SignIn = React.createClass({
    getInitialState: function() {
        return {
            user: {
                email: "",
                password: ""
            }
        }
    },
    changeUser: function(event) {
        var field = event.target.name;
        var user = this.state.user;
        user[field] = event.target.value;

        this.setState({
            user: user
        });
    },
    processForm: function(event) {
        event.preventDefault();

        //string for HTTP body message
        var email = encodeURIComponent(this.state.user.email);
        var password = encodeURIComponent(this.state.user.password);
        var formData = `email=${email}&password=${password}`;

        //AJAX request (sadly no jQuery)
        var xhr = new XMLHttpRequest();
        xhr.open("post", "/auth/signin");
        xhr.setRequestHeader("Content-type", "applicaton/x-www-form-urlencoded");
        xhr.responseType = "json";
        xhr.addEventListener("load", () => {
            if (xhr.status === 200) {
                console.log("SignIn.js ajax request valid");
            } else {
                console.log("SignIn.js ajax request problem- xhr.status: ", xhr.status);
            }
        });
        xhr.send(formData);

        console.log("email: ", this.state.user.email);
        console.log("password: ", this.state.user.password);
    },
    render: function() {
	    return (
	    	<div>
                <Nav currentPage="signin" />
               <form action="/" onSubmit={this.processForm}>

                    <FormGroup controlId="emailInput">
                        <ControlLabel>Email</ControlLabel>
                        <FormControl
                        name="email"
                        type="email"
                        placeholder="mail@mail.com"
                        onChange={this.changeUser} 
                        value={this.state.user.email} 
                        >
                        </FormControl>
                    </FormGroup>

                    <FormGroup controlId="passwordInput">
                        <ControlLabel>Password</ControlLabel>
                        <FormControl
                        name="password"
                        type="password"
                        placeholder="password"
                        onChange={this.changeUser} 
                        value={this.state.user.password} 
                        >
                        </FormControl>
                    </FormGroup>
                    
                    <button type="submit">Sign In!</button>
                    <p>Don't already have an account? <Link to={"/signup"}>Sign In</Link></p>
                </form>
                <Footer />
            </div>
	   	);
	}
});

module.exports = SignIn;
