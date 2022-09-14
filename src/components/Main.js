import { Switch, Route } from 'react-router-dom';
import Home from './Home/Home';

const Main = () => {
    return (
        <div>
            <Switch>
                <Route path="/" exact component={Home} />
            </Switch>
        </div>
    )
}

export default Main;