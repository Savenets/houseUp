import React from 'react';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

import { title, homeContainer, list } from './GoalMaker.css';

const Home = () => {
  return (
    <div className={goalMakerContainer}>
      <h1 className={title}>Set up your home building next goal</h1>
      <p>This is your board you can view your progress here</p>
    </div>
  );
};

export default Home;

