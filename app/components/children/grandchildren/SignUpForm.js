var React = require("react");
var Link = require("react-router").Link;

//build dumb component which receives props from SignUp and renders sign-up form
const SignUpForm = ({
    onSubmit,
    onChange,
    user
}) => (
    <form action="/" onSubmit={onSubmit}>
        <div className="form-group">
            <label htmlFor="nameInput">First Name</label>
            <input type="text" className="form-control" name="nameInput" onChange={onChange} value={user.name} placeholder="Bob"/>
        </div>
        <div className="form-group">
            <label htmlFor="emailInput">Email</label>
            <input type="email" className="form-control" name="emailInput" onChange={onChange} value={user.email}placeholder="email@email.com"/>
        </div>
        <div className="form-group">
            <label htmlFor="passwordInput">Password</label>
            <input type="password" className="form-control" name="emailInput" onChange={onChange} value={user.password} placeholder="password"/>
        </div>
        <button type="submit" className="btn">Sign Me Up!</button>
        <p>Already have an account? <Link to={"/signin"}>Sign In</Link></p>
    </form>
);

module.exports = SignUpForm;

