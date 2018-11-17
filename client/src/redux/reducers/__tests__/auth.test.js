import authReducer, { INITIAL_STATE } from 'redux/reducers/authReducer';
import {
  AUTH_USER_SUCCESS,
  AUTH_USER_FAILURE,
  AUTH_USER,
  AUTH_USER_LOGOUT,
} from 'redux/actions/types';

describe('Auth Reducer', () => {
  it('handles action of unknown type', () => {
    const action = { type: 'UNKNOWN' };
    const newState = authReducer(INITIAL_STATE, action);

    expect(newState).toEqual(INITIAL_STATE);
  });

  it('handles action of type AUTH_USER', () => {
    const action = { type: AUTH_USER };
    const newState = authReducer(INITIAL_STATE, action);

    expect(newState).toEqual({ ...INITIAL_STATE, loading: true });
  });

  it('handles action of type AUTH_USER_SUCCESS', () => {
    const action = {
      type: AUTH_USER_SUCCESS,
      payload: 'jbJy5XSgX13TS8',
    };
    const newState = authReducer(INITIAL_STATE, action);

    expect(newState).toEqual({ ...INITIAL_STATE, authenticated: action.payload, loading: false });
  });

  it('handles action of type AUTH_USER_FAILURE', () => {
    const action = {
      type: AUTH_USER_FAILURE,
      payload: 'failure',
    };
    const newState = authReducer(INITIAL_STATE, action);

    expect(newState).toEqual({ ...INITIAL_STATE, errorMessage: action.payload, loading: false });
  });

  it('handles action of type AUTH_USER_LOGOUT', () => {
    const action = { type: AUTH_USER_LOGOUT };
    const newState = authReducer(INITIAL_STATE, action);

    expect(newState).toEqual({ ...INITIAL_STATE, authenticated: '' });
  });
});
