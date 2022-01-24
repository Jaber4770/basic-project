import React from 'react';
import { Route } from 'react-router-dom';
import UseAuth from '../Hooks/UseAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const { user } = UseAuth();
return (
    <Route
        {...rest}
        render={({ location }) => user}
    >

    </Route>
);
};

export default PrivateRoute;