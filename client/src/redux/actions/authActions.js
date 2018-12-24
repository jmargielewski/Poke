import axios from 'axios';
import {
  AUTH_USER,
  AUTH_USER_SUCCESS,
  AUTH_USER_FAILURE,
  AUTH_USER_LOGOUT,
} from './types';
import { setToken, removeToken } from '../../app/token';

const signupSuccess = response => ({
  type: AUTH_USER_SUCCESS,
  payload: response.data.token,
});

const signupFailure = e => ({
  type: AUTH_USER_FAILURE,
  payload: e.response.data.error,
});

export const signup = (formProps, callback) => async (dispatch) => {
  dispatch({ type: AUTH_USER });
  try {
    const response = await axios.post('/signUp', formProps);

    dispatch(signupSuccess(response));
    setToken(response.data.token);
    callback();
  } catch (e) {
    dispatch(signupFailure(e));
  }
};

export const signin = (formProps, callback) => async (dispatch) => {
  dispatch({ type: AUTH_USER });
  try {
    const response = await axios.post('/signIn', formProps);

    dispatch(signupSuccess(response));
    setToken(response.data.token);
    callback();
  } catch (e) {
    dispatch(signupFailure(e));
  }
};

export const signout = () => {
  removeToken();
  return {
    type: AUTH_USER_LOGOUT,
  };
};
