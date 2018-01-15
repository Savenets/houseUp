import React from 'react';
import PropTypes from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import styles from './Layout.css';

const Layout = ({ children, theme }) => {
  return (
    <MuiThemeProvider muiTheme={theme}>
      <div className={styles.layoutWrapper}>
        {children}
      </div>
    </MuiThemeProvider>
  );
};

Layout.defaultProps = {
  theme: {},
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  theme: PropTypes.shape({
    appBar: PropTypes.shape({
      height: PropTypes.number,
    }),
  }),
};

export default Layout;

