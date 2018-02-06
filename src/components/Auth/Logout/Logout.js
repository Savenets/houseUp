import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

class Logout extends React.Component {
  componentDidMount() {
    this.props.logout();
  }

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return <Redirect to="/" />;
  }
}

Logout.propTypes = {
  logout: PropTypes.func.isRequired,
};

export default Logout;
