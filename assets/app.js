
import './styles/app.scss';

import './bootstrap';

import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home';


export default function AppReact() {
    return (
        <BrowserRouter>
            <Switch location={location} key={location.pathname}>
                <Route exact path={'/home'} component={Home} />
            </Switch>
        </BrowserRouter>
    );
}
