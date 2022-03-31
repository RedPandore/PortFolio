import './styles/app.scss';

import './bootstrap';

import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Basic from './components/Basic';
import NotFound from './components/404';


export default function AppReact() {

    return (
        <BrowserRouter>
            <Switch location={location} key={location.pathname}>
                <Route exact path={'/'} component={Basic} />
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    );
}
