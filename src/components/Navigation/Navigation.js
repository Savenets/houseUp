import React from 'react';
import PropTypes from 'prop-types';
import AddTask from 'material-ui/svg-icons/action/alarm-add';
import { Link } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from './AppBar';
import DrawerMenu from './DrawerMenu';

const titleStyle = {
  marginLeft: 16,
};

class Navigation extends React.Component {

  state = {
    drawerOpen: false,
  };

  onMenuItemTap = () => {
    console.log("helloooooy ");
    this.toggleDrawerState();
  };

  onRequestClose = () => {
    this.setState({
      drawerOpen: false,
    });
  };

  toggleDrawerState = () => {
    this.setState({
      drawerOpen: !this.state.drawerOpen,
    });
  };

  render() {
    const { drawerOpen } = this.state;
    const { children, appBarStyles, ...rest } = this.props;



    const appBarProps = {
      iconElementRight: <a href="/signup"> <RaisedButton primary label="Signup" /></a>,
      handleLeftButtonTouchTap: this.onMenuItemTap,
      style: appBarStyles,
      titleStyle,
      ...rest,
    };

    return (
      <AppBar {...appBarProps}>
        <DrawerMenu
          isOpen={drawerOpen}
          onRequestChange={this.toggleDrawerState}
          onRequestClose={this.onRequestClose}
        />
        { children }
      </AppBar>
    );
  }
}

Navigation.defaultProps = {
  children: null,
  appBarStyles: null,
};

Navigation.propTypes = {
  children: PropTypes.node,
  appBarStyles: PropTypes.shape({}),
};

export default Navigation;
