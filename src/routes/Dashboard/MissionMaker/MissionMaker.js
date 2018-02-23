import React from 'react';
import Paper from 'material-ui/Paper';
import MissionMakerContainer from './containers/MissionMakerContainer';

import { missionMakerContainer, title } from './MissionMaker.css';

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

const missionMaker = () => {
  return (
    <div className={missionMakerContainer}>
      <h1 className={title}>Set up your home building next mission</h1>
      <Paper style={styles.paperStyle} zDepth={4}>
        <MissionMakerContainer />
      </Paper>
    </div>
  );
};

export default missionMaker;

