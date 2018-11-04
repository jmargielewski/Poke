// external
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

// internals
import MainLayout from '../containers/layout/MainLayout';
import Dashboard from './Dashboard';
import Landing from './Landing';

// actions
import { fetchUser } from '../redux/actions';

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
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div className="container">
        <Router>
          <div>
            <AppRoute exact path="/" layout={MainLayout} component={Landing} />
            <AppRoute path="/dashboard" layout={MainLayout} component={Dashboard} />
          </div>
        </Router>
      </div>
    );
  }
}

export default connect(null, { fetchUser })(App);
