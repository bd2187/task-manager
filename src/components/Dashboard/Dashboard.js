import React from 'react';
import NavigationContainer from '../../containers/NavigationContainer';
import DashboardStyles from './DashboardStyles';

const Dashboard = function() {
    return (
        <DashboardStyles>
            <NavigationContainer />
            <p>dashboard</p>
        </DashboardStyles>
    );
};

export default Dashboard;
