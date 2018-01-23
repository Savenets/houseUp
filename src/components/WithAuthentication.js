/* eslint-disable */
import React from 'react';
import { connect } from 'react-redux';
import { authAuthenticateUser } from '../actions/auth';

import { firebase } from '../firebase';

const withAuthentication = Component => {
  class WithAuthentication extends React.Component {

    componentDidMount() {
      const { onSetAuthUser } = this.props;

      firebase.auth.onAuthStateChanged(authUser => {
        authUser
          ? onSetAuthUser(authUser)
          : onSetAuthUser(null);
      });
    }

    render() {

      return (
        <Component />
      );
    }
  }

  const mapDispatchToProps = dispatch => ({
    onSetAuthUser: authUser => dispatch(authAuthenticateUser(authUser)),
  });

  return connect(null, mapDispatchToProps)(WithAuthentication);
};

export default withAuthentication;
