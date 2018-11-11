import axios from 'axios';
import { AUTH_USER, AUTH_USER_SUCCESS, AUTH_USER_FAILURE } from './types';

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
    localStorage.setItem('token', response.data.token);
    callback();
  } catch (e) {
    dispatch(signupFailure(e));
  }
};
