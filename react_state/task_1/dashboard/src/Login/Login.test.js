import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';
import { StyleSheetTestUtils } from 'aphrodite';

beforeAll(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterAll(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
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

  describe('Login', () => {
    it('should enable submit button after changing input values', () => {
      const wrapper = shallow(<Login />);
      const emailInput = wrapper.find('#email');
      const passwordInput = wrapper.find('#password');
      const submitButton = wrapper.find('input[type="submit"]');
  
      expect(submitButton.prop('disabled')).toBe(true);
  
      emailInput.simulate('change', { target: { value: 'test@example.com' } });
      passwordInput.simulate('change', { target: { value: 'password123' } });
  
      wrapper.update();
  
      expect(submitButton.prop('disabled')).toBe(false);
    });
  });
});