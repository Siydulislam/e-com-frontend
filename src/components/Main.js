import { Switch, Route } from 'react-router-dom';
import Home from './home/Home';
import PrivateRoute from './protectedRoutes/PrivateRoute';
import Dashboard from './user/Dashboard';
import Login from './user/Login';
import Register from './user/Register';

const Main = () => {
    return (
        <div>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/login" exact component={Login} />
                <Route path="/register" exact component={Register} />
                <PrivateRoute path="/dashboard">
                    <Dashboard />
                </PrivateRoute>
            </Switch>
        </div>
    )
}

export default Main;