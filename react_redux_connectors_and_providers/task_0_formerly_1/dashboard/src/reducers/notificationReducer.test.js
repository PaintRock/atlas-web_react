import notificationReducer from './notificationReducer';
import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, SET_TYPE_FILTER } from '../actions/notificationActionTypes';

describe('notificationReducer', () => {
  const initialState = {
    notifications: [],
    filter: 'DEFAULT',
  };

  const notificationData = [
    { id: 1, type: 'default', value: 'New course available' },
    { id: 2, type: 'urgent', value: 'New resume available' },
    { id: 3, type: 'urgent', value: 'New data available' },
  ];

  it('should return the initial state when no action is passed', () => {
    const result = notificationReducer(undefined, {});
    expect(result).toEqual(initialState);
  });

  it('should return the data with isRead set to false when FETCH_NOTIFICATIONS_SUCCESS is passed', () => {
    const expectedData = {
      notifications: notificationData.map(notification => ({ ...notification, isRead: false })),
      filter: 'DEFAULT',
    };
    const result = notificationReducer(initialState, { type: FETCH_NOTIFICATIONS_SUCCESS, data: notificationData });
    expect(result).toEqual(expectedData);
  });

  it('should update the isRead property for the selected notification when MARK_AS_READ is passed', () => {
    const initialStateWithData = {
      notifications: notificationData.map(notification => ({ ...notification, isRead: false })),
      filter: 'DEFAULT',
    };
    const expectedData = {
      notifications: initialStateWithData.notifications.map((notification, index) => {
        if (index === 1) {
          return { ...notification, isRead: true };
        }
        return notification;
      }),
      filter: 'DEFAULT',
    };
    const result = notificationReducer(initialStateWithData, { type: MARK_AS_READ, index: 1 });
    expect(result).toEqual(expectedData);
  });

  it('should update the filter when SET_TYPE_FILTER is passed', () => {
    const initialStateWithData = {
      notifications: notificationData.map(notification => ({ ...notification, isRead: false })),
      filter: 'DEFAULT',
    };
    const expectedData = {
      notifications: initialStateWithData.notifications,
      filter: 'URGENT',
    };
    const result = notificationReducer(initialStateWithData, { type: SET_TYPE_FILTER, filter: 'URGENT' });
    expect(result).toEqual(expectedData);
  });
});
