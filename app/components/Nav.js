
var React = require("react");
var Link = require("react-router").Link;
var NavButton = require("./children/NavButton");

var Nav = React.createClass({
    getInitialState: function() {
        return(
            {
                page: this.props.currentPage,
                rulesClass: "btn navbar-btn",
                playClass: "btn navbar-btn",
                homeClass: "btn navbar-btn"
            }
        )
    },
    componentWillMount: function(props) {
        if (this.props.currentPage === "rules") {
            this.setState({rulesClass: "hidden-button"});
        }
        if (this.props.currentPage === "play") {
            this.setState({playClass: "hidden-button"});
        }
        if (this.props.currentPage === "signin" || this.props.currentPage === "signup") {
            this.setState({
                rulesClass: "hidden-button",
                playClass: "hidden-button",
                homeClass: "hidden-button",
            });
        }

    },
    render: function() {
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <h1><Link to="/logout"><img src="./images/planet.jpg" alt="logo" width="50"/> Planet Venn</Link></h1>
                    </div>
                    <ul className="nav navbar-nav navbar-right">
                        <NavButton link="/rules" class={this.state.rulesClass} text="Rules" />
                        <NavButton link="/" class={this.state.playClass} text="Play" />
                        <NavButton link="/logout" class={this.state.homeClass} text="Sign Out" />
                    </ul>
                </div>
            </nav>
        );
    }
});

module.exports = Nav;




