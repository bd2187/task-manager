import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import HomeContainer from '../containers/HomeContainer';
import DashboardContainer from '../containers/DashboardContainer';

const routes = (
    <Router>
        <Switch>
            <Route exact path="/" component={HomeContainer} />
            <Route exact path="/dashboard" component={DashboardContainer} />
        </Switch>
    </Router>
);

export default routes;
