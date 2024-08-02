import React from 'react';
import { firestore } from '../firebaseConfig';
import { collection, addDoc } from "firebase/firestore";

type Props = {
  userId: string;
};

/**
 * NotificationButtons Component
 * Renders buttons to send different types of notifications.
 * Adds a new notification document to Firestore on button click.
 */
const NotificationButtons: React.FC<Props> = ({ userId }) => {

  /**
   * Sends a notification of the specified type.
   * @param {string} type - The type of notification.
   */
  const sendNotification = async (type: string): Promise<void> => {
    try {
      const data = {
        type,
        message: `Notification received at`,
        userId,
        read: false,
        date: new Date()
      };
      console.log("Data to write in Firestore:", data);
      
      // Add a new document with the specified data to the "notifications" collection
      const docRef = await addDoc(collection(firestore, "notifications"), data);
      console.log("Document written with ID:", docRef.id);
    } catch (error) {
      console.error("Error adding document:", error);
    }
  };

  return (
    <div className='button-container'>
      <button className='alertButton Info' onClick={() => sendNotification('Info')}>Info</button>
      <button className='alertButton Warning' onClick={() => sendNotification('Warning')}>Warning</button>
      <button className='alertButton Error' onClick={() => sendNotification('Error')}>Error</button>
    </div>
  );
};

export default NotificationButtons;
