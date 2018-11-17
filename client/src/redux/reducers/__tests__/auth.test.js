import authReducer, { INITIAL_STATE } from 'redux/reducers/authReducer';
import {
  AUTH_USER_SUCCESS,
  AUTH_USER_FAILURE,
  AUTH_USER,
  AUTH_USER_LOGOUT,
} from 'redux/actions/types';

it('handles action of unknown type', () => {
  const action = { type: 'UNKNOWN' };

  const newState = authReducer(INITIAL_STATE, action);

  expect(newState).toEqual(INITIAL_STATE);
});
