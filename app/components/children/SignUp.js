var React = require("react");
var SignUpForm = require("./grandchildren/SignUpForm");

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
                <SignUpForm
                    onSubmit= {this.processForm}
                    onChange= {this.changeUser}
                    user={this.state.user}
                />
            </div>
	   	);
	}
});

module.exports = SignUp;

