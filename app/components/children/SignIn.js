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