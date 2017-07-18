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

