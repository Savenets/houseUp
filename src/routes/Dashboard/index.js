import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';

import Home from './Home/conatiners/DashboardHomeContainer';
import GoalMaker from './GoalMaker';

const  Dashboard = ({ match: { url } }) => (
  <Switch>
    <Route exact path={`${url}/`} component={Home} />
    <Route exact path={`${url}/goal-maker`} component={GoalMaker} />
  </Switch>
);

Dashboard.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }).isRequired,
};

export default Dashboard;


