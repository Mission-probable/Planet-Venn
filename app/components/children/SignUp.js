var React = require("react");
import {Link} from "react-router";
//get form components from react-bootstrap
import {FormGroup, FormControl, ControlLabel} from "react-bootstrap";

// components
var Nav = require("./grandchildren/Nav");
var Footer = require("./grandchildren/Footer");


var SignUp = React.createClass({
    getInitialState: function() {
        return {
            user: {
                name: "",
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
        var name = encodeURIComponent(this.state.user.name);
        var email = encodeURIComponent(this.state.user.email);
        var password = encodeURIComponent(this.state.user.password);
        var formData = `name=${name}&email=${email}&password=${password}`;

        //AJAX request (with no jQuery)
        var xhr = new XMLHttpRequest();
        xhr.open("post", "/auth/signup");
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.responseType = "json";
        xhr.addEventListener("load", () => {
            if (xhr.status === 2000) {
                console.log("SignUp.js ajax req. - form is valid");
            } else {
                console.log("SignUp.js ajax req failed: ", xhr.status);
            }
        });
        xhr.send(formData);

        console.log("name:", this.state.user.name);
        console.log("email: ", this.state.user.email);
        console.log("password: ", this.state.user.password);
    },
    render: function() {
	    return (
	    	<div>
                <Nav currentPage="signup" />
                <form action="/" onSubmit={this.processForm}>

                    <FormGroup controlId="nameInput">
                        <ControlLabel>Name</ControlLabel>
                        <FormControl
                        name="name"
                        type="text"
                        placeholder="Bob"
                        onChange={this.changeUser} 
                        value={this.state.user.name} 
                        >
                        </FormControl>
                    </FormGroup>

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
                    
                    <button type="submit">Sign Me Up!</button>
                    <p>Already have an account? <Link to={"/signin"}>Sign In</Link></p>
                </form>
                <Footer />
            </div>
	   	);
	}
});

module.exports = SignUp;



