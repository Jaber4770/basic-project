import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import UseAuth from '../Hooks/UseAuth';

const Login = () => {
    const { signInWithGoogleProvider, signInWithGitHubProvider } = UseAuth();
    return (
        <div>
            <h1>Please Log in</h1>
            <button onClick={signInWithGoogleProvider}>Google login</button> <br />
            <button onClick={signInWithGitHubProvider}>GitHub Login</button>
            <br /> <br /><br />
            <Link to="/register">New User?</Link>
        </div>
    );
};

export default Login;