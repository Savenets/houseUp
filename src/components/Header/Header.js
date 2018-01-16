import React from 'react';
import PropTypes from 'prop-types';
import Navigation from '../Navigation';

import { headerWrapper } from './Header.css';

const Header = ({ isAuthenticated, accountName, style }) => {

  return (
    <header className={headerWrapper} style={style}>
      <Navigation />
    </header>
  );
};

Header.defaultProps = {
  isAuthenticated: false,
  accountName: '',
  style: null,
};

Header.propTypes = {
  isAuthenticated: PropTypes.bool,
  accountName: PropTypes.string,
  style: PropTypes.shape(),
};

export default Header;
