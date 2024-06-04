import { Map } from 'immutable';
import uiReducer from './uiReducer';
import {
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} from '../actions/uiActionTypes';

describe('uiReducer', () => {
  const initialState = Map({
    isNotificationDrawerVisible: false,
    isUserLoggedIn: false,
    user: Map({}),
  });

  it('should return the initial state when no action is passed', () => {
    const result = uiReducer(undefined, {});
    expect(result.toJS()).toEqual(initialState.toJS());
  });

  it('should return the initial state when the action SELECT_COURSE is passed', () => {
    const result = uiReducer(initialState, { type: 'SELECT_COURSE' });
    expect(result.toJS()).toEqual(initialState.toJS());
  });

  it('should change isNotificationDrawerVisible to true when DISPLAY_NOTIFICATION_DRAWER is passed', () => {
    const result = uiReducer(initialState, { type: DISPLAY_NOTIFICATION_DRAWER });
    expect(result.get('isNotificationDrawerVisible')).toBe(true);
  });
});