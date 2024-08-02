import React from 'react';
import NotificationButtons from './components/NotificationButtons';
import NotificationList from './components/NotificationList';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebaseConfig';
import { signInAnonymously } from 'firebase/auth';
import './App.css';

const App: React.FC = () => {
  const [user, loading, error] = useAuthState(auth);

  React.useEffect(() => {
    if (loading) return; // Don't do anything while loading
    if (!user) {
      signInAnonymously(auth)
        .then(() => {
          // Handle successful sign-in here if needed
        })
        .catch((error) => {
          // Handle errors here
          console.error("Error on Firebase Anoymous login", error.code, error.message);
        });
    }
  }, [user, loading]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!user) {
    return <div>Please sign in to view notifications.</div>;
  }

  return (
    <div>
      <h1>Notification System</h1>
      <NotificationButtons userId={user.uid} />
      <NotificationList userId={user.uid} />
    </div>
  );
};

export default App;
