import * as Normalizr from 'normalizr';
import * as data from '../../notifications.json';

const user = new Normalizr.schema.Entity("users");
const message = new Normalizr.schema.Entity("messages", {}, { idAttribute: "guid" });
const notification = new Normalizr.schema.Entity("notifications", {
  author: user,
  context: message,
});

export const normalizedData = Normalizr.normalize(data.default, [notification]);
