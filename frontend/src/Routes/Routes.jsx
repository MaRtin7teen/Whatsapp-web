import { Route, Switch, Redirect } from "react-router-dom";

// Pages
import Login from '../Pages/Login/Login';
import Signup from '../Pages/Signup/Signup';
import ChatApp from '../Pages/ChatApp/ChatApp';

// Private Route
import PrivateRoute from './PrivateRoute';

// Public Route
import PublicRoute from './PublicRoute';

const Routes = () => {
    return (
        <Switch>

            {/* Chat Apllication Page */}
            <PrivateRoute exact path="/">
                <ChatApp />
            </PrivateRoute>

            {/* Signup Page */}
            <PublicRoute path="/signup">
                <Signup />
            </PublicRoute>

            {/* Login Page */}
            <PublicRoute path="/login">
                <Login />
            </PublicRoute>

            {/* Any other route */}
            <Route>
                <Redirect to="/" />
            </Route>
        </Switch>
    )
}

export default Routes;