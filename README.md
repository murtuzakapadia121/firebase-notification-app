# Firebase Notification App

  

## Project Overview

  

This project is a React single-page application (SPA) that uses Firebase for authentication and notifications. It includes:

  

- Firebase setup with emulators for local development.

- A notification system that allows users to send and view notifications.

- Notifications are marked as "read" once viewed.

  

## Technologies Used

  

-  **React**: JavaScript library for building user interfaces.

-  **TypeScript**: JavaScript with static types.

-  **Firebase**: Google's mobile and web application development platform.

-  **Material-UI**: React components for faster and easier web development.

  

## Installation Instructions

  

Follow these steps to set up and run the project:

  

### 1. Clone the Repository

  


    git clone  https://github.com/your-username/your-repository-name.git
    
    cd  your-repository-name

###  2. Install  Dependencies

Ensure you  have  Node.js  and  npm  installed.


    npm install

###  3. Set  Up  Firebase  Emulators

Install Firebase  CLI  if  you  haven't already:

 

    npm install -g firebase-tools


    firebase emulators:start

###  5. Run the Development Server

    npm start

This will start the React development server, and you can view the app at http://localhost:3000.

  

###  Usage

Notifications

NotificationButtons: A component with buttons to send notifications. Each button sends a different type of notification (Info, Warning, or Error).

  

NotificationItem: A component that displays a notification with its message, type, and timestamp. Notifications are marked as read after 5 seconds or manually by clicking the "Mark as Read" button.

  

###  Code Structure

**src/firebaseConfig.ts:** Firebase configuration and initialization.

**src/components/NotificationButtons.tsx:** Component for sending notifications.

**src/components/NotificationItem.tsx:** Component for displaying notifications.

###  Troubleshooting

Firebase Emulator Not Working: Ensure Firebase emulators are running and properly configured.

###  License

This project  is  licensed  under  the  MIT  License.  See  the  LICENSE  file  for  details.