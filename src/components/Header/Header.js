import React from 'react';
import PropTypes from 'prop-types';
import Navigation from '../Navigation';

import { headerWrapper } from './Header.css';

const Header = ({ isAuthenticated, style }) => {

  return (
    <header className={headerWrapper} style={style}>
      <Navigation />
    </header>
  );
};

Header.defaultProps = {
  isAuthenticated: false,
  style: null,
};

Header.propTypes = {
  isAuthenticated: PropTypes.bool,
  style: PropTypes.shape(),
};

export default Header;
