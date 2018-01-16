import React from 'react';
import PropTypes from 'prop-types';
import injectTapEventPlugin from 'react-tap-event-plugin';

import '../styles/global.css';
import { app } from './AppComponent.css';

injectTapEventPlugin();

const AppComponent = ({ children }) => (
  <div className={app}>
    {children}
  </div>
);

AppComponent.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppComponent;
