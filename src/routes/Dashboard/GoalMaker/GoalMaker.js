import React from 'react';
import Paper from 'material-ui/Paper';
import GoalMakerContainer from './containers/GoalMakerContainer';

import { goalMakerContainer, title } from './GoalMaker.css';

const styles = {
  paperStyle: {
    maxWidth: 800,
    width: '100%',
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

const GoalMaker = () => {
  return (
    <div className={goalMakerContainer}>
      <h1 className={title}>Set up your home building next goal</h1>
      <Paper style={styles.paperStyle} zDepth={4}>
        <GoalMakerContainer />
      </Paper>
    </div>
  );
};

export default GoalMaker;

