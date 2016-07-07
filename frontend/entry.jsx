// React
const React = require("react");
const ReactDOM = require("react-dom");

// Modal
const Modal = require("react-modal");

// Router
const ReactRouter = require('react-router');
const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const IndexRoute = ReactRouter.IndexRoute;
const hashHistory = ReactRouter.hashHistory;

// Components
const App = require('./components/app');
const LoginForm = require('./components/login_form');
const Dashboard = require("./components/dashboard/dashboard");
const BlogShow = require("./components/blog/blog_show");
const Explore = require("./components/explore/explore");

// Auth
const SessionStore = require('./stores/session_store');
const SessionActions = require('./actions/session_actions');

const appRouter = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Dashboard} onEnter={_ensureLoggedIn}/>
      <Route path="login" component={ LoginForm } />
      <Route path="signup" component={ LoginForm } />
      <Route path="blogs/:userId" component={BlogShow}/>
      <Route path="explore" component={Explore}/>
    </Route>
  </Router>
);

function _ensureLoggedIn(nextState, replace) {
  if (!SessionStore.isUserLoggedIn()) {
      replace('/login');
  }
}

document.addEventListener("DOMContentLoaded", () =>{
  if (window.currentUser) {
    SessionActions.receiveCurrentUser(window.currentUser);
  }

  Modal.setAppElement(document.body);

  let content = document.getElementById('content');
  ReactDOM.render(appRouter, content);
});

window.BlogActions = require("./actions/blog_actions");
