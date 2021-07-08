import {Switch, Route} from 'react-router-dom';
import Register from '../src/components/Register';
import Login from '../src/components/Login';
import Home from '../src/components/Home';

export default function Routes(){
    return(
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/register" exact component={Register} />
            <Route path="/login" exact component={Login} />
        </Switch>
    )
}