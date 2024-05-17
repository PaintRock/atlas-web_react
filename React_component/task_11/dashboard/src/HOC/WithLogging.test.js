import React from 'react';
import { shallow, mount } from 'enzyme';
import WithLogging from './WithLogging';
import Login from '../Login/Login';

describe('WithLogging HOC', () => {
  let consoleLogSpy;

  beforeEach(() => {
    consoleLogSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
  });

  afterEach(() => {
    consoleLogSpy.mockRestore();
  });

  it('should log mount and unmount with Component when wrapped element is pure html', () => {
    const WrappedComponent = WithLogging(() => <p />);
    const wrapper = mount(<WrappedComponent />);
    expect(consoleLogSpy).toHaveBeenCalledWith('Component Component is mounted');
    wrapper.unmount();
    expect(consoleLogSpy).toHaveBeenCalledWith('Component Component is going to unmount');
  });

  it('should log mount and unmount with the name of the component when the wrapped element is the Login component', () => {
    const WrappedComponent = WithLogging(Login);
    const wrapper = mount(<WrappedComponent />);
    expect(consoleLogSpy).toHaveBeenCalledWith('Component Login is mounted');
    wrapper.unmount();
    expect(consoleLogSpy).toHaveBeenCalledWith('Component Login is going to unmount');
  });
});
