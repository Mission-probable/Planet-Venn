import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Card, CardText, CardHeader } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

const LoginForm = ({
  onSubmit,
  onChange,
  errors,
  successMessage,
  user
}) => (
  <Card id="LogInForm">
    <CardHeader title="Sign In" avatar="./images/planet.jpg"/>
    <form action="/" onSubmit={onSubmit}>

      <div className="field-line">
        <TextField
          floatingLabelText="Email"
          name="email"
          errorText={errors.email}
          onChange={onChange}
          value={user.email}
        />
      </div>

      <div className="field-line">
        <TextField
          floatingLabelText="Password"
          type="password"
          name="password"
          onChange={onChange}
          errorText={errors.password}
          value={user.password}
        />
      </div>

      {errors.summary && <p className="error-message">{errors.summary}</p>}
    <FlatButton type="submit" label="Log In" primary />
     
      <CardText>Don't have an account? <Link to={'/signup'}><FlatButton type="submit" label="Create One" primary /></Link></CardText>
    </form>
  </Card>
);

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  successMessage: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired
};

export default LoginForm;
