import { useState } from 'react'

const Login = () => {
    const [user, setUser] = useState();

    const handleGoogleSingIn = async () => {
        try {
            console.log("Signing in with Google...");
        } catch (error) {
            console.error("Error during sing-in:", error.message);
        }
    };

    const handleSingOut = async () => {
        try {
            console.log("Signing out...");
        } catch (error) {
            console.error("Error during sing-out:", error.message);
        }
    };

    const fetchSecureData = async () => {
        try {
            console.log("Fetching secure data...");
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
