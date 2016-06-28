
const React = require('react');
const Link = require('react-router').Link;
const SessionActions = require('../actions/session_actions');
const SessionStore = require('../stores/session_store');
const ErrorStore = require('../stores/error_store');

const LoginForm = React.createClass({

	contextTypes: {
		router: React.PropTypes.object.isRequired
	},

  getInitialState() {
    return {
      username: "Username",
      password: "Password"
    };
  },

  componentDidMount() {
    this.errorListener = ErrorStore.addListener(this.forceUpdate.bind(this));
    this.sessionListener = SessionStore.addListener(this.redirectIfLoggedIn);
  },

  componentWillUnmount() {
    this.errorListener.remove();
    this.sessionListener.remove();
  },

  redirectIfLoggedIn() {
    if (SessionStore.isUserLoggedIn()) {
      this.context.router.push("/");
    }
  },

	handleSubmit(e) {
		e.preventDefault();

		const formData = {
			username: this.state.username,
			password: this.state.password
		};

    if (this.props.location.pathname === "/login") {
      SessionActions.logIn(formData);
    } else {
      SessionActions.signUp(formData);
    }
	},

  fieldErrors(field) {
    const errors = ErrorStore.formErrors(this.formType());

    if (!errors[field]) { return; }

    const messages = errors[field].map( (errorMsg, i) => {
      return <li key={ i }>{ errorMsg }</li>;
    });

    return <ul>{ messages }</ul>;
  },

  formType() {
    return this.props.location.pathname.slice(1);
  },

  update(property) {
    return (e) => this.setState({[property]: e.target.value});
  },

	render() {

    let navLink;
    if (this.formType() === "login") {
      navLink = <Link to="/signup">sign up instead</Link>;
    } else {
      navLink = <Link to="/login">log in instead</Link>;
    }

		return (
			<div className="splash">


				<form onSubmit={this.handleSubmit} className="login-form">

					<div>
					<img src="http://res.cloudinary.com/kattelles/image/upload/v1467145360/Stumblr.-logo_yb0fzm.png"/>
					</div>

					<div className="login-errors">
	        	{ this.fieldErrors("base") }
					</div>

						<div className="login-input">
			        <br />
			          { this.fieldErrors("username") }
								<input type="text"
			            value={this.state.username}
			            onChange={this.update("username")} />
			        <br />
			          { this.fieldErrors("password") }
			          <input type="password"
			            value={this.state.password}
			            onChange={this.update("password")}/>
						</div>
						<input className="login-submit"
							type="submit"
							value="Submit" />
						<br/>

						<div className="login-toggle">
						Please { this.formType() } or { navLink }
						</div>

						<br />
				</form>
			</div>
		);
	}
});

module.exports = LoginForm;
