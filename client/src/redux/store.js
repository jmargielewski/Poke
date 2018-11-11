/* eslint no-underscore-dangle: ["error", { "allow": ["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"] }] */
import {
  compose,
  createStore,
  applyMiddleware,
} from 'redux';
import reduxThunk from 'redux-thunk';
import reducer from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  {
    auth: { authenticated: localStorage.getItem('token') },
  },
  composeEnhancers(applyMiddleware(reduxThunk)),
);

export default store;
