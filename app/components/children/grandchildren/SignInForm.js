var React = require("react");
var Link = require("react-router").Link;

//build dumb component which receives props from SignIn and renders sign-in form
const SignInForm = ({
    onSubmit,
    onChange,
    user
}) => (
    <form action="/" onSubmit={onSubmit}>
        <div className="form-group">
            <label htmlFor="emailInput">Email</label>
            <input type="email" className="form-control" name="emailInput" onChange={onChange} value={user.email}placeholder="email@email.com"/>
        </div>
        <div className="form-group">
            <label htmlFor="passwordInput">Password</label>
            <input type="password" className="form-control" name="emailInput" onChange={onChange} value={user.password} placeholder="password"/>
        </div>
        <button type="submit" className="btn">Sign In!</button>
        <p>Don't have an account? <Link to={"/signup"}>Sign Up</Link></p>
    </form>
);

module.exports = SignInForm;

