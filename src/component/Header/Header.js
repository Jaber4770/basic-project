import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import UseAuth from '../Hooks/UseAuth';
import './Herder.css'

const Header = () => {
    const {user, logout} = UseAuth();
    return (
        <div className='header'>
            <Link to="/home">Home</Link>
            <Link to="/shipping">Shipping</Link>
            <Link to="/placeorder">Placeorder</Link>
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
            <span>{user.displayName} </span>
            { user.email && <button onClick={logout}>Log Out</button>}
        </div>
    );
};

export default Header;