// external
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// internals
import MainLayout from '../containers/layout/MainLayout';
import Home from './Home';

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

const App = () => (
  <div className="container">
    App Hello
    <Router>
      <Switch>
        <AppRoute exact path="/" layout={MainLayout} component={Home} />
        <Route to="/home" component={Home} />
      </Switch>
    </Router>
  </div>
);

export default App;
