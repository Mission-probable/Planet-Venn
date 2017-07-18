var React = require("react");

var SignInForm = require("./grandchildren/SignInForm");

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
                <SignInForm
                    onSubmit= {this.processForm}
                    onChange= {this.changeUser}
                    user={this.state.user}
                />
            </div>
	   	);
	}
});

module.exports = SignIn;