import React from 'react';
import { shallow } from 'enzyme';
import Header from '../Header/Header';
import { StyleSheetTestUtils } from 'aphrodite';

beforeAll(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

describe('Login', () => {
  it('should render without crashing', () => {
    shallow(<Login />);
  });

  it('should disable submit button by default', () => {
    const wrapper = shallow(<Login />);
    const submitButton = wrapper.find('input[type="submit"]');
    expect(submitButton.prop('disabled')).toBe(true);
  });

  it('should enable submit button after changing input values', () => {
    const wrapper = shallow(<Login />);
    const emailInput = wrapper.find('input[name="email"]');
    const passwordInput = wrapper.find('input[name="password"]');
    const submitButton = wrapper.find('input[type="submit"]');

    emailInput.simulate('change', { target: { value: 'test@example.com' } });
    passwordInput.simulate('change', { target: { value: 'password123' } });

    expect(submitButton.prop('disabled')).toBe(false);
  });
});
