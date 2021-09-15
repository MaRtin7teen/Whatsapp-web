import { Route, Switch, Redirect } from "react-router-dom";

// Pages
import Login from '../Pages/Login/Login';
import Signup from '../Pages/Signup/Signup';
import ChatApp from '../Pages/ChatApp/ChatApp';

// Private Route
import PrivateRoute from './PrivateRoute';

const Routes = () => {
    return (
        <Switch>

            {/* Chat Apllication Page */}
            <PrivateRoute exact path="/">
                <ChatApp />
            </PrivateRoute>

            {/* Signup Page */}
            <Route path="/signup">
                <Signup />
            </Route>

            {/* Login Page */}
            <Route path="/login">
                <Login />
            </Route>

            {/* Any other route */}
            <Route>
                <Redirect to="/" />
            </Route>
        </Switch>
    )
}

export default Routes;