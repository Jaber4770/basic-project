import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const Register = () => {
    return (
        <div>
            <h1>Please Regiter</h1>
            <form>
                <label htmlFor="">Email</label>
                <input type="email" />
                <br /><br />
                <label htmlFor="">Password</label>
                <input type="password" />
                <br /><br />
                <input type="submit" />
            </form>
            <Link to="/login">Already registerd?</Link>
        </div>
    );
};

export default Register;