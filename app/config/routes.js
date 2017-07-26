import Base from '../components/Base.js';
import HomePage from '../components/HomePage.js';
import DashboardPage from '../components/DashboardPage.js';
import LoginPage from '../components/LoginPage.js';
import SignUpPage from '../components/SignUpPage.js';
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
