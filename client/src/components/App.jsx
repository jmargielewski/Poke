// external
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// internals
import MainLayout from '../containers/layout/MainLayout';
import Dashboard from './Dashboard';
import Landing from './Landing';
import Signup from '../containers/auth/Signup';
import Signin from '../containers/auth/Signin';

// hoc
import RequireAuth from './hoc/RequireAuth';

const AppRoute = ({ component: Component, layout: Layout, ...rest }) => (
  <Route
    {...rest}
    render = {props => (
      <Layout>
        <Component {...props} />
      </Layout>
    )}
  />
);

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Router>
          <div>
            <AppRoute exact path="/" layout={MainLayout} component={Landing} />
            <AppRoute path="/dashboard" layout={MainLayout} component={RequireAuth(Dashboard)} />
            <AppRoute path="/signup" layout={MainLayout} component={Signup} />
            <AppRoute path="/signin" layout={MainLayout} component={Signin} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
