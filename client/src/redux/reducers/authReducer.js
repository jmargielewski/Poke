import {
  AUTH_USER,
  AUTH_USER_SUCCESS,
  AUTH_USER_FAILURE,
  AUTH_USER_LOGOUT,
} from '../actions/types';

export const INITIAL_STATE = {
  loading: false,
  authenticated: '',
  errorMessage: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AUTH_USER:
      return { ...state, loading: true };
    case AUTH_USER_SUCCESS:
      return { ...state, authenticated: action.payload, loading: false };
    case AUTH_USER_FAILURE:
      return { ...state, errorMessage: action.payload, loading: false };
    case AUTH_USER_LOGOUT:
      return { ...state, authenticated: '' };
    default:
      return state;
  }
};
