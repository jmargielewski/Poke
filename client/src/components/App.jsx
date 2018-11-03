// external
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';


// internals
import MainLayout from '../containers/layout/MainLayout';
import Home from './Home';
import { fetchUser } from '../redux/actions';

const AppRoute = ({ component: ComponentChild, layout: Layout, ...rest }) => (
  <Route
    {...rest}
    render = {props => (
      <Layout>
        <ComponentChild {...props} />
      </Layout>
    )}
  />
);

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div className="container">
        <Router>
          <Switch>
            <AppRoute exact path="/" layout={MainLayout} component={Home} />
            <Route exact path="/home" component={Home} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default connect(null, { fetchUser })(App);
