import React from 'react';
import UseAuth from '../Hooks/UseAuth';

const Home = () => {
    const {user} = UseAuth();
    return (
        <div>
            <h1>This is your Home page.</h1>
            <h5>User: {user.displayName}</h5>
        </div>
    );
};

export default Home;