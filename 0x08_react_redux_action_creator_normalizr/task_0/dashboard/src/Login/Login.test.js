// task_1/dashboard/src/Login/Login.test.js
import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';
import { StyleSheetTestUtils } from 'aphrodite';

beforeAll(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

describe('Login', () => {
  it('renders without crashing', () => {
    shallow(<Login logIn={() => {}} />);
  });

  it('should have the submit button disabled by default', () => {
    const wrapper = shallow(<Login logIn={() => {}} />);
    expect(wrapper.find('input[type="submit"]').prop('disabled')).toBe(true);
  });

  it('should enable the submit button when both inputs are not empty', () => {
    const wrapper = shallow(<Login logIn={() => {}} />);
    wrapper.find('#email').simulate('change', { target: { value: 'test@example.com' } });
    wrapper.find('#password').simulate('change', { target: { value: 'password' } });
    expect(wrapper.find('input[type="submit"]').prop('disabled')).toBe(false);
  });
});
