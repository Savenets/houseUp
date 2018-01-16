import React from 'react';
import PropTypes from 'prop-types';

import { footerWrapper, footerMainCopy } from './Footer.css';

const Footer = ({ style }) => {

  return (
    <footer className={footerWrapper} style={style}>
      <h2 className={footerMainCopy}>houseUp brings construction planing to shape your world in a way you wand in time you want.</h2>
      <h3>A proper planning is a key to success with HouseUp.</h3>
    </footer>
  );
};

Footer.defaultProps = {
  style: null,
};

Footer.propTypes = {
  style: PropTypes.shape({}),
};

export default Footer;
