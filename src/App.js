import React, { useState } from 'react';
import { Amplify, Auth, API } from 'aws-amplify';
import awsconfig from './aws-exports';

Amplify.configure(awsconfig);

function App() {
    const [user, setUser] = useState(null);
    const [unicorn, setUnicorn] = useState(null);

    async function signIn() {
        try {
            const user = await Auth.signIn("testuser", "password123");
            setUser(user);
        } catch (error) {
            console.error("Error signing in", error);
        }
    }

    async function callAPI() {
        try {
            const response = await API.post("WildRydesAPI", "/ride", { headers: { Authorization: `Bearer ${user.signInUserSession.idToken.jwtToken}` } });
            setUnicorn(response.unicorn);
        } catch (error) {
            console.error("Error calling API", error);
        }
    }

    return (
        <div>
            <h1>Wild Rydes</h1>
            {!user ? (
                <button onClick={signIn}>Sign In</button>
            ) : (
                <>
                    <button onClick={callAPI}>Call Unicorn</button>
                    {unicorn && <p>Unicorn Assigned: {unicorn.Name}</p>}
                </>
            )}
        </div>
    );
}

export default App;

