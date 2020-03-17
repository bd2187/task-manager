import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import HomeContainer from '../containers/HomeContainer';

const routes = (
    <Router>
        <Switch>
            <Route path="/" component={HomeContainer} />
        </Switch>
    </Router>
);

export default routes;
