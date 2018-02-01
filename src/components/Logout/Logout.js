import React from 'react';
import PropTypes from 'prop-types';

import Spinner from '../../components/Spinner';

class Logout extends React.Component {
  componentDidMount() {
    setTimeout(this.props.logout, -1);
    // this.props.logout();
  }

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return <Spinner opaque />;
  }
}

Logout.propTypes = {
  logout: PropTypes.func.isRequired,
};

export default Logout;
