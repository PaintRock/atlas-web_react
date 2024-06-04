import { login, logout, displayNotificationDrawer, hideNotificationDrawer } from './uiActionCreators';
import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from './uiActionTypes';

describe('action creators tests', () => {
  it('login should return the right action', () => {
    const email = 'test@example.com';
    const password = 'password123';
    const expectedAction = { type: LOGIN, user: { email, password } };
    expect(login(email, password)).toEqual(expectedAction);
  });

  it('logout should return the right action', () => {
    const expectedAction = { type: LOGOUT };
    expect(logout()).toEqual(expectedAction);
  });

  it('displayNotificationDrawer should return the right action', () => {
    const expectedAction = { type: DISPLAY_NOTIFICATION_DRAWER };
    expect(displayNotificationDrawer()).toEqual(expectedAction);
  });

  it('hideNotificationDrawer should return the right action', () => {        
    const expectedAction = { type: HIDE_NOTIFICATION_DRAWER };
    expect(hideNotificationDrawer()).toEqual(expectedAction);
  });
});
