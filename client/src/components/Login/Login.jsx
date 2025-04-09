import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import app from '../../firebase/firebase.init';

import { useState } from 'react'

const Login = () => {
    const [user, setUser] = useState();

    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSingIn = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            console.log("result:", result);
            const loggedInUser = result.user;
            console.log("User signed in:", loggedInUser);

            // Retrieve the token
            const token = await loggedInUser.getIdToken(true);
            console.log("Token:", token);

            // Save token to local storage or secure storage
            localStorage.setItem('token', token);

            // Set user in the application state
            setUser(loggedInUser);

        } catch (error) {
            console.error("Error during sing-in:", error.message);
        }
    };

    const handleSingOut = async () => {
        try {
            const result = await signOut(auth);
            console.log("User signed out:", result);
            // Clear token from local storage or secure storage
            localStorage.removeItem('token');
            // Clear user from the application state
            setUser(null);
        } catch (error) {
            console.error("Error during sing-out:", error.message);
        }
    };

    const fetchSecureData = async () => {
        try {
            const currentUser = auth.currentUser;

            if (!currentUser) {
                console.error("No user is signed in.");
                return;
            }
            // Retrieve the token
            const token = await currentUser.getIdToken(true);
            console.log("Token:", token);

            // Save token to local storage or secure storage
            localStorage.setItem('token', token);

            const response = await fetch('http://localhost:5001/secure-data', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if (response.ok) {
                const data = await response.json();
                console.log("Secure data:", data);
            }
            else {
                console.error("Failed to fetch secure data:", response.status);
            }

        } catch (error) {
            console.error("Error fetching secure data:", error.message);
        }
    };

  return (
    <div>
        {user ? (
            <>
                <button onClick={handleSingOut}>Sign Out</button>
                <button onClick={fetchSecureData}>Fetch Secure Data</button>
            </>
        ) : (
            <>
                <button onClick={handleGoogleSingIn}>Google Login</button>
            </>
        )}
        {
            user && (
                <div>
                    <h3>User: {user.displayName}</h3>
                    <p>Email: {user.email}</p>
                </div>
            )
        }
    </div>
  )
}

export default Login
