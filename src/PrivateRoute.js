
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
function PrivateRoute({ component: Component, ...rest }) {
    return (
        <Route
            {...rest}
            render={props =>
              localStorage.getItem("Authorization") ? (

                    <Component {...props} />
                ) : (
                        <Redirect
                            to={{
                                pathname: "/",
                            }}
                        />
                    )
            }
        />
    );
}

export default PrivateRoute;

