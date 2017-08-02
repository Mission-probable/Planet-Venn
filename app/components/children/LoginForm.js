import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Card, CardText, CardHeader } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidUpdate() {
        getUserEmail();
    }
    render() {

        return (
            <Card id="LogInForm">
                <CardHeader title="Sign In" avatar="./images/planet.jpg"/>
                <form action="/" onSubmit={this.props.onSubmit}>

                <div className="field-line">
                    <TextField
                    id="userEmail"
                    floatingLabelText="Email"
                    name="email"
                    errorText={this.props.errors.email}
                    onChange={this.props.onChange}
                    value={this.props.user.email}
                    />
                </div>

                <div className="field-line">
                    <TextField
                    floatingLabelText="Password"
                    type="password"
                    name="password"
                    onChange={this.props.onChange}
                    errorText={this.props.errors.password}
                    value={this.props.user.password}
                    />
                </div>

                {this.props.errors.summary && <p className="error-message">{this.props.errors.summary}</p>}
                <FlatButton type="submit" label="Log In" primary />
                
                <CardText>Don't have an account? <Link to={'/signup'}><FlatButton type="submit" label="Create One" primary /></Link></CardText>
                </form>
            </Card>
        );
    }
};



export default LoginForm;
