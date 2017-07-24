import Base from '../components/Base.js';
import HomePage from '../components/HomePage.js';
import DashboardPage from '../containers/DashboardPage.js';
import LoginPage from '../containers/LoginPage.js';
import SignUpPage from '../containers/SignUpPage.js';
import Rules from '../containers/Rules.js';
import Auth from '../utils/Auth';


const routes = {
  // base component (wrapper for the whole application).
  component: Base,
  childRoutes: [
    {
      path: '/',
      getComponent: (location, callback) => {
        if (Auth.isUserAuthenticated()) {
          callback(null, DashboardPage);
        } else {
          callback(null, HomePage);
        }
      }
    },
    {
      path: '/rules',
      component: Rules
    },
    {
        path: '/play',
        component: DashboardPage
    },
    {
      path: '/login',
      component: LoginPage
    },
    {
      path: '/signup',
      component: SignUpPage
    },
    {
      path: '/logout',
      onEnter: (nextState, replace) => {
        Auth.deauthenticateUser();
        // change the current URL to /
        replace('/');
      }
    }
  ]
};

export default routes;
