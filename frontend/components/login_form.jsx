
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
      username: "",
      password: ""
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

	demoAccount() {
		SessionActions.logIn({
			username: "guest",
			password: "password"
		});
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

    let navLink, buttonText, question;
    if (this.formType() === "login") {
      navLink = <Link to="/signup">Sign up</Link>;
			buttonText = "Login";
			question = "New user? ";
    } else {
      navLink = <Link to="/login">Log in</Link>;
			buttonText = "Sign up";
			question = "Already a member? ";
    }

		return (
			<div className="splash">
				<div className="overlay"></div>

				<form onSubmit={this.handleSubmit} className="login-form">

					<div>
					<img id="logo" src="https://res.cloudinary.com/kattelles/image/upload/v1469478923/Stumblr-logo_4_whzlbd.png"/>
					</div>

					<div className="login-errors">
	        	{ this.fieldErrors("base") }
					</div>

						<div className="login-input">
			        <br />
			          { this.fieldErrors("username") }
								<input type="text"
									placeholder="Username"
			            value={this.state.username}
			            onChange={this.update("username")} />
			        <br />
			          { this.fieldErrors("password") }
			          <input type="password"
									placeholder="Password"
			            value={this.state.password}
			            onChange={this.update("password")}/>
						</div>


						<input className="login-submit"
							type="submit"
							value={buttonText} />
						<br/>

						<div className="login-toggle">
							{ question }  { navLink } or continue as <span id="demo" onClick={this.demoAccount}>Guest</span>.
						</div>
				</form>
			</div>
		);
	}
});

module.exports = LoginForm;
