import React from 'react';
import { Route, Redirect } from "react-router-dom";
import { loadData } from '../Utils/LocalStorage';

const PrivateRoute = ({path,children}) => {

    // Fetching Auth status from localStorage
    const auth = loadData("auth") || false;
    // console.log(auth);

    return auth ? (

        // If Auth is true redirects user to ChatApp
        <Redirect to="/" />

    ) :

    // If Auth status is false 
    <Route path={path}>
        {children}
    </Route>
}

export default PrivateRoute;