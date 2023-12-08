// notifications.js
import PushNotification from 'react-native-push-notification';

const scheduleNotification = (message, date) => {
  PushNotification.localNotificationSchedule({
    message,
    date,
  });
};

export { scheduleNotification };
