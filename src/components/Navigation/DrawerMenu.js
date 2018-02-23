import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Drawer from './Drawer';

import { titleWrapper, titleWrapperLoggedIn, title, drawerMenu, navItem } from './DrawerMenu.css';

const style = {
  copyrightWithLogo: {
    margin: 'auto auto 16px',
  },
};

class DrawerMenu extends Component {

  requestClose = () => {

    const { onRequestClose } = this.props;

    if (onRequestClose) {
      onRequestClose();
    }
  };

  render() {
    const { isOpen, onRequestChange } = this.props;

    return (
      <Drawer
        isOpen={isOpen}
        onRequestClose={this.requestClose}
        onRequestChange={onRequestChange}
      >
        <div className={drawerMenu}>
          <h4 className={title}>HouseUp your future with our help!</h4>
          <Link className={navItem} to="/dashboard">Dashboard</Link>
          <Link className={navItem} to="/dashboard/mission-maker">Make a mission</Link>
          <Link className={navItem} to="/dashboard/reports">Reports</Link>
        </div>
      </Drawer>
    );
  }
}

DrawerMenu.contextTypes = {
  router: PropTypes.object.isRequired,
};

DrawerMenu.defaultProps = {
  onRequestClose: null,
};

DrawerMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onRequestChange: PropTypes.func.isRequired,
  onRequestClose: PropTypes.func,
};

export default DrawerMenu;
