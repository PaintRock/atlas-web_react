import React from 'react';
import { shallow } from 'enzyme';
import Header from '../Header/Header';
import { StyleSheetTestUtils } from 'aphrodite';

beforeAll(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});
describe('Login', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.exists()).toBe(true);
  });

  it('should have a submit button disabled by default', () => {
    const wrapper = shallow(<Login />);
    const submitButton = wrapper.find('input[type="submit"]');
    expect(submitButton.prop('disabled')).toBe(true);
  });

  it('should enable the submit button after changing the value of the two inputs', () => {
    const wrapper = shallow(<Login />);
    const emailInput = wrapper.find('#email');
    const passwordInput = wrapper.find('#password');
    const submitButton = wrapper.find('input[type="submit"]');

    emailInput.simulate('change', { target: { value: 'test@example.com' } });
    passwordInput.simulate('change', { target: { value: 'password' } });

    expect(submitButton.prop('disabled')).toBe(false);
  });
});
