import { normalize, schema } from 'normalizr';
import * as data from '../../notifications.json';

const user = new schema.Entity("users");
const message = new schema.Entity("messages", {}, { idAttribute: "guid" });
const notification = new schema.Entity("notifications", {
  author: user,
  context: message,
});

const normalizedData = normalize(data.default, [notification]);

const getAllNotificationsByUser = (userId) => {
  const notifications = [];
  
  for (const notificationId of normalizedData.result) {
    const notificationData = normalizedData.entities.notifications[notificationId];
    if (notificationData.author === userId) {
      notifications.push(normalizedData.entities.messages[notificationData.context]);
    }
  }
  
  return notifications;
};

export { normalizedData, getAllNotificationsByUser };
