import React from 'react';
import PropTypes from 'prop-types';
import MUIAppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';

const AppBar = ({ title, children, iconElementLeft, iconElementRight, handleLeftButtonTouchTap, style, titleStyle }) => {

  const appBarStyle = {
    style: {
      boxShadow: '0 0 4px 0 rgba(0,0,0,0.12), 0 4px 4px 0 rgba(0,0,0,0.24)',
      alignItems: 'center',
      minHeight: 60,
      ...style,
    },
    iconStyleRight: {
      marginTop: 0,
    },
    iconStyleLeft: {
      marginTop: 0,
    },
    titleStyle: {
      fontSize: '2rem',
      lineHeight: '2.8rem',
      fontWeight: 700,
      textTransform: 'capitalize',
      height: 'auto',
      ...titleStyle,
    },
  };

  const elementLeft = <IconButton>{iconElementLeft}</IconButton>;

  return (
    <MUIAppBar
      title={title}
      iconElementLeft={elementLeft}
      onLeftIconButtonClick={handleLeftButtonTouchTap}
      iconElementRight={iconElementRight}
      {...appBarStyle}
    >
      {children}
    </MUIAppBar>
  );
};

AppBar.defaultProps = {
  title: null,
  children: null,
  iconElementLeft: <MenuIcon />,
  iconElementRight: null,
  handleLeftButtonTouchTap: undefined,
  hasBoxShadow: false,
  style: null,
  titleStyle: null,
};

AppBar.propTypes = {
  title: PropTypes.node,
  children: PropTypes.node,
  iconElementLeft: PropTypes.node,
  iconElementRight: PropTypes.node,
  handleLeftButtonTouchTap: PropTypes.func,
  hasBoxShadow: PropTypes.bool,
  style: PropTypes.shape(),
  titleStyle: PropTypes.shape(),
};

export default AppBar;
