import React from 'react';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

import { title, homeContainer, list } from './Home.css';

const Home = () => {
  return (
    <div className={homeContainer}>
      <h1 className={title}>Welcome! </h1>
      <p>This is your board you can view your progress here</p>
    </div>
  );
};

export default Home;


