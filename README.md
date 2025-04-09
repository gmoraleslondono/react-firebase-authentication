# Firebase Login System and Secure Backend APIs

This project is a full-stack application that demonstrates a Firebase-based authentication system integrated with a secure backend API. It includes a React frontend and an Express backend, with Firebase handling authentication and user management.

## Link to the tutorial:

https://www.youtube.com/watch?v=YDtWWYu_xDo

## Features

- **Frontend**: Built with React and Vite, featuring a simple login system using Firebase Authentication.
- **Backend**: Built with Express, featuring secure APIs protected by Firebase Admin SDK.
- **Authentication**: Google Sign-In for user authentication.
- **Secure API**: Backend routes are protected using Firebase ID tokens.

## Project Structure

backend/
.env
.gitignore
firebaseAdmin.js
firebaseServiceAccountKey.json
index.js
middleware/
auth.js
package.json

client/
.gitignore
eslint.config.js
index.html
package.json
public/
README.md
src/
App.css
App.jsx
assets/
components/
Header/
Home/
Login/
firebase/
index.css
Layout/

## Getting Started

### Prerequisites

- Node.js (v16 or later)
- Firebase project set up in the [Firebase Console](https://console.firebase.google.com/)

### Backend Setup

1. Navigate to the `backend` directory:

```
cd backend
```

2. Install dependencies:

```
npm install
```

3. Add your Firebase Admin SDK service account key:

- Download the service account key JSON file from the Firebase Console (Find steps how to get the key in the "Secure Notes" section).
- Place it in the backend directory as firebaseServiceAccountKey.json.
  Note: This file is ignored by .gitignore for security reasons. Do not commit it to version control.

4. Start the backend server:

```
npm run dev
```

The server will run on http://localhost:5001.

### Frontend Setup

1. Navigate to the client directory:

```
cd client
```

2. Install dependencies:

```
npm install
```

3. Update the Firebase configuration in firebase.init.js with your Firebase project credentials (Find steps how to get your credentials in the "Secure Notes" section).

4. Start the frontend development server:

```
npm run dev
```

The app will run on http://localhost:5173.

## Usage

1. Open the frontend app in your browser.
2. Click "Google Login" to sign in using your Google account.
3. After signing in, you can:

- Fetch secure data from the backend by clicking "Fetch Secure Data".
- Sign out by clicking "Sign Out".

## Backend API

Protected Route: /secure-data

- Method: GET
- Headers: Requires an Authorization header with a valid Firebase ID token. Example: "Authorization: Bearer {token}"
- Response: Returns secure data and user information.

## Security Notes

- The `firebaseServiceAccountKey.json` file contains sensitive credentials and is ignored by `.gitignore`. Ensure it is never committed to version control.

  **Placement**: This file should be placed in the `backend` directory for the backend server to function correctly.

  **How to Obtain**:

  1. Go to the [Firebase Console](https://console.firebase.google.com/).
  2. Select your project.
  3. Navigate to **Project Settings** > **Service Accounts**.
  4. Click **Generate New Private Key** to download the `firebaseServiceAccountKey.json` file.

- The `firebase.init.js` file, which contains Firebase configuration details, is also ignored by `.gitignore` for security reasons. Ensure it is not exposed publicly.

  **Placement**: This file should be placed in the `client/src/firebase` directory for the frontend application to connect to Firebase properly.

  **How to Obtain**:

  1. Go to the [Firebase Console](https://console.firebase.google.com/).
  2. Select your project.
  3. Navigate to **Project Settings** > **General**.
  4. Under the **Your Apps** section, locate your app and copy the Firebase configuration object.
  5. Use this configuration to create the `firebase.init.js` file in the `client/src/firebase` directory.

## Dependencies

### Backend

- express: Web framework for Node.js.
- cors: Middleware for enabling CORS.
- firebase-admin: Firebase Admin SDK for backend authentication.

### Frontend

- react: JavaScript library for building user interfaces.
- react-router-dom: Routing library for React.
- firebase: Firebase SDK for frontend authentication.

## License

This project is licensed under the MIT License.
