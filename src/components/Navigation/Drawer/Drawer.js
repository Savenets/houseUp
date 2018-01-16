import React from 'react';
import PropTypes from 'prop-types';
import MaterialDrawer from 'material-ui/Drawer';

const drawerStyle = {
  containerStyle: {
    display: 'flex',
    flexDirection: 'column',
    whiteSpace: 'normal',
  },
};

const Drawer = ({ isOpen, onRequestChange, children }) => (
  <MaterialDrawer
    docked={false}
    open={isOpen}
    onRequestChange={onRequestChange}
    {...drawerStyle}
  >
    {children}
  </MaterialDrawer>
);

Drawer.propTypes = {
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onRequestChange: PropTypes.func.isRequired,
};

export default Drawer;
