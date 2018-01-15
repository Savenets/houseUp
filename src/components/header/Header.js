import React from 'react';
import PropTypes from 'prop-types';

import { headerWrapper } from 'Header.css';

const Header = ({ isAuthenticated, accountName, style }) => {

  return (
    <header className={headerWrapper} style={style}>
      <div>
        house Up
      </div>
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
