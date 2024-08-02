import React from 'react';
import { firestore } from '../firebaseConfig';
import { useCollection } from 'react-firebase-hooks/firestore';
import { collection, doc, orderBy, query, where } from "firebase/firestore"; 
import NotificationItem from './NotificationItem';

type Props = {
  userId: string;
};

const NotificationList: React.FC<Props> = ({ userId }) => {
  const notificationsRef = collection(firestore, "notifications");
  const notificationQuery = query(notificationsRef, where("userId", "==", userId), orderBy("date", "desc"));
  const [notifications] = useCollection(notificationQuery);

  const formatDate = (timestamp: any) => {
    const date = new Date(timestamp.seconds * 1000);
    const dateString = date.toLocaleDateString();
    const timeString = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    return `${dateString} ${timeString}`;
  };

  return (
    <div className='notification-container'>
      {notifications?.docs.map((doc) => {
        const notif = doc.data();
        const id = doc.id;

        return (
          <NotificationItem
            key={id}
            message={notif.message}
            id={id}
            read={notif.read}
            type={notif.type}
            timestamp={notif.date} // Pass timestamp to NotificationItem
          />
        );
      })}
    </div>
  );
};

export default NotificationList;
