import React from 'react';
import PropTypes from 'prop-types';

import '../styles/global.css';
import styles from './AppComponent.css';

const AppComponent = ({ children }) => (
  <div className={styles.app}>
    {children}
  </div>
);

AppComponent.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppComponent;

