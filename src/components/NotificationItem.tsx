import { doc, updateDoc } from "firebase/firestore";
import React, { useEffect } from "react";
import { firestore } from '../firebaseConfig';
import CheckIcon from '@mui/icons-material/Check';

type Props = {
  id: string;
  message: string;
  read: boolean;
  type: string;
  timestamp: any; // Consider using a more specific type if possible
};

/**
 * NotificationItem Component
 * Displays a notification with a message, type, and date.
 * Automatically marks the notification as read after 5 seconds.
 */
const NotificationItem: React.FC<Props> = ({ id, message, read, type, timestamp }) => {
  
  /**
   * Returns the CSS class based on the notification type.
   * @param {string} type - The type of notification.
   * @returns {string} - The corresponding CSS class.
   */
  const getNotificationClass = (type: string): string => {
    switch (type) {
      case "Info":
        return "notification notification-info";
      case "Warning":
        return "notification notification-warning";
      case "Error":
        return "notification notification-error";
      default:
        return "notification";
    }
  };

  /**
   * Marks the notification as read in Firestore.
   * @param {string} id - The ID of the notification document.
   */
  const markAsRead = async (id: string): Promise<void> => {
    try {
      const notificationDocRef = doc(firestore, "notifications", id);
      await updateDoc(notificationDocRef, { read: true });
      console.log("Notification marked as read");
    } catch (error) {
      console.error("Error marking notification as read:", error);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      markAsRead(id);
    }, 5000);

    // Cleanup the timer if the component unmounts before the timeout completes
    return () => clearTimeout(timer);
  }, [id]);

  const formattedDate = new Date(timestamp.seconds * 1000);
  const dateString = formattedDate.toDateString();
  const timeString = formattedDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });

  return (
    <p className={getNotificationClass(type)}>
      {`${type}: ${message} ${dateString} ${timeString}`}
      {!read ? (
        <button onClick={() => markAsRead(id)}>Mark as Read</button>
      ) : (
        <button disabled><CheckIcon color="success" /></button>
      )}
    </p>
  );
};

export default NotificationItem;
