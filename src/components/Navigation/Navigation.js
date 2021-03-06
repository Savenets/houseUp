import React from 'react';
import PropTypes from 'prop-types';
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
    const { children, isAuthenticated, appBarStyles, ...rest } = this.props;
    const Controls = (
      <div>
        { isAuthenticated ? <Link to="/auth/logout"><RaisedButton primary label="logout" /></Link>
                          : <Link to="/auth/login"><RaisedButton primary label="Login" /></Link> }
      </div>);

    const appBarProps = {
      iconElementRight: Controls,
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
  isAuthenticated: false,
};

Navigation.propTypes = {
  children: PropTypes.node,
  appBarStyles: PropTypes.shape({}),
  isAuthenticated: PropTypes.bool,
};

export default Navigation;
