import React from 'react';
import { Route, Redirect } from "react-router-dom";
import { loadData } from '../Utils/LocalStorage';

const PrivateRoute = ({path,children}) => {

    // Fetching Auth status from localStorage
    const auth = loadData("auth") || false;
    // console.log(auth);

    const chats = loadData("chats") || false;

    return auth ? (

        // If Auth status is true 
        <Route path={path}>
            {children}
        </Route>
    ) :
    chats ? 

    // If chats is true then it redirects the user to the login page
    <Redirect to="/login" /> :

    // If Auth status & chats is false then it redirects the user to the signup page
    <Redirect to="/signup" />
}

export default PrivateRoute;