import React from 'react';

import LandingPage from './app/pages/LandingPage';
import LoginPage from './app/pages/LoginPage';
import RegisterPage from './app/pages/RegisterPage';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from 'react-router-dom'

import {PrivateRoute} from "./app/components/private-route";

function App() {
    return (
        <Router>
            <Switch>
                <PrivateRoute exact path="/" component={LandingPage}/>
                <Route exact path="/Login" component={LoginPage}/>
                <Route exact path="/Register" component={RegisterPage}/>
                <Redirect to="/"/>
            </Switch>
        </Router>
    );
}

export default App;
