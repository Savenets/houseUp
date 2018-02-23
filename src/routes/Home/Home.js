import React from 'react';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router-dom';

import { title, homeContainer, list } from './Home.css';

const styles = {
  paperStyle: {
    maxWidth: 500,
    margin: 24,
    padding: 24,
    textAlign: 'center',
    display: 'inline-block',
  },
  buttonStyles: {
    height: 56,
    margin: '16px 0',
  },
};

const Home = () => {
  return (
    <div className={homeContainer}>
      <h1 className={title}>HouseUp the planning app for controlling, planning, your house construction or its repair making</h1>
      <p>
        Designed for those people who’re looking for a full-featured app to manage construction or repair better. HouseUp, which
        costs years for designing and coding is now coming out for everybody.
        We combine preparation tasks, tasks itself with work costs one place so that you do not need to spend extra money for work being done in time and proper.
      </p>
      <Paper style={styles.paperStyle} zDepth={4}>
        <h2>Ready to start?</h2>
        <ol className={list}>
          <li>Set up your mission and make a short description</li>
          <li>Describe in details the work to be done to proceed immediately</li>
          <li>Set up steps and make a short description of it</li>
          <li>Make a list of materials and tools required, provide its price</li>
          <li>Track your progress on your personal dashboard</li>
        </ol>
        <Link to="/auth/login">
          <RaisedButton
            style={styles.buttonStyles}
            fullWidth
            primary
            label="Make your mission now"
          />
        </Link>
      </Paper>
    </div>
  );
};

export default Home;


