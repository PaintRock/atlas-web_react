import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';
import { StyleSheetTestUtils } from 'aphrodite';

let logOutMock;
let wrapper;

beforeAll(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

beforeEach(() => {
  document.addEventListener = jest.fn();
  global.alert = jest.fn();
  logOutMock = jest.fn();
  wrapper = shallow(<App logOut={logOutMock} />);
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

  it('should contain the Login component', () => {
    expect(wrapper.find(Login).length).toBe(1);
  });

  it('should contain the Footer component', () => {
    expect(wrapper.find(Footer).length).toBe(1);
  });

  it('renders Login component when isLoggedIn is false', () => {
    expect(wrapper.find(Login)).toHaveLength(1);
    expect(wrapper.find(CourseList)).toHaveLength(0);
  });

  it('renders CourseList component when isLoggedIn is true', () => {
    const wrapper = shallow(<App isLoggedIn={true} />);
    expect(wrapper.find(Login)).toHaveLength(0);
    expect(wrapper.find(CourseList)).toHaveLength(1);
  });

  it('should call logOut and display alert when control+h keys are pressed', () => {
    const event = new KeyboardEvent('keydown', { ctrlKey: true, key: 'h' });
    document.dispatchEvent(event);
    expect(logOutMock).toHaveBeenCalledTimes(1);
    expect(global.alert).toHaveBeenCalledWith('Logging you out');
  });
});
