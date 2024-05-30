import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';
import { StyleSheetTestUtils } from 'aphrodite';
import BodySection from '../BodySection/BodySection';
import { defaultUser } from './AppContext';

let logOutMock;
let wrapper;

beforeAll(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

beforeEach(() => {
  document.addEventListener = jest.fn();
  global.alert = jest.fn();
  logOutMock = jest.fn();
  wrapper = shallow(<App />);
  jest.spyOn(global, 'alert').mockImplementation(() => {});
});

afterEach(() => {
  document.addEventListener.mockRestore();
  global.alert.mockRestore();
});

describe('App', () => {
  it('renders without crashing', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('should contain the Notifications component', () => {
    expect(wrapper.find(Notifications).length).toBe(1);
  });

  it('should contain the Header component', () => {
    expect(wrapper.find(Header).length).toBe(1);
  });

  it('should contain the Footer component', () => {
    expect(wrapper.find(Footer).length).toBe(1);
  });

  it('renders Login component when user is not logged in', () => {
    const state = wrapper.state();
    expect(state.user).toEqual(defaultUser);
    expect(wrapper.find(Login)).toHaveLength(1);
    expect(wrapper.find(CourseList)).toHaveLength(0);
  });

  it('renders CourseList component when user is logged in', () => {
    const state = wrapper.state();
    state.user.isLoggedIn = true;
    wrapper.setState(state);
    expect(wrapper.find(Login)).toHaveLength(0);
    expect(wrapper.find(CourseList)).toHaveLength(1);
  });

  it('should call logOut and update state when control+h keys are pressed', () => {
    const state = wrapper.state();
    state.user.isLoggedIn = true;
    wrapper.setState(state);
    const event = new KeyboardEvent('keydown', { ctrlKey: true, key: 'h' });
    document.dispatchEvent(event);
    expect(wrapper.state().user).toEqual(defaultUser);
    expect(global.alert).toHaveBeenCalledWith('Logging you out');
  });

  it('should update state when logIn function is called', () => {
    const email = 'test@example.com';
    const password = 'password';
    wrapper.instance().logIn(email, password);
    expect(wrapper.state().user).toEqual({
      email,
      password,
      isLoggedIn: true,
    });
  });

  it('should update state when logOut function is called', () => {
    const state = wrapper.state();
    state.user.isLoggedIn = true;
    wrapper.setState(state);
    wrapper.instance().logOut();
    expect(wrapper.state().user).toEqual(defaultUser);
  });
});
