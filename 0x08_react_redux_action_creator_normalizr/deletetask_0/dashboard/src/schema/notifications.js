import * as data from '../notifications.json';

export function getAllNotificationsByUser(userId) {
  return data.default
    .filter((notification) => notification.author.id === userId)
    .map(({ context }) => context);
}
