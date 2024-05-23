import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

describe('Notifications component', () => {
  it('renders without crashing', () => {
    shallow(<Notifications />);
  });

  it('renders the correct number of list items based on the listNotifications prop', () => {
    const listNotifications = [
      { id: 1, type: 'default', value: 'Notification 1' },
      { id: 2, type: 'urgent', value: 'Notification 2' },
      { id: 3, type: 'default', value: 'Notification 3' },
    ];
    const wrapper = shallow(<Notifications listNotifications={listNotifications} />);
    expect(wrapper.find('ul').children().length).toBe(listNotifications.length);
  });
});