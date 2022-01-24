import React from 'react';
import { Route } from 'react-router-dom';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import UseAuth from '../Hooks/UseAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const { user } = UseAuth();
    return (
        <Route
            {...rest}
            render={({ location }) => user.email ? children : <Redirect
                to={{
                    pathname: '/login',
                    state: { from: location }
                }}
            >
            </Redirect>}
        >

        </Route>
    );
};

export default PrivateRoute;