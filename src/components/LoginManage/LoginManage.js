import React, { useState } from 'react';

import "./LoginManage.css";

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';
import Preferences from '../Preferences/Preferences';

import Login from './Login';

function LoginManage() {
    const [token,setToken] = useState();

    if(!token) {
        return <Login setToken={setToken} />
    }

    return(
        <div className="wrapper">
            <h1>Application</h1>
            <BrowserRouter>
                <Switch>
                    <Route path="/dashboard">
                        <Dashboard />
                    </Route>
                    <Route path="/preferences">
                        <Preferences />
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default LoginManage;