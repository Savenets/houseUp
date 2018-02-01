/* eslint-disable */
import React from 'react';
import { connect } from 'react-redux';

import { authAuthenticateInit, authAuthenticateUser } from '../actions/auth';

import { firebase } from '../firebase';

const withAuthentication = Component => {
  class WithAuthentication extends React.Component {

    componentDidMount() {
      this.props.verifyAuth()
    }

    render() {

      return (
        <Component />
      );
    }
  }

  const mapDispatchToProps = dispatch => ({

    verifyAuth: () => {
      firebase.auth.onAuthStateChanged(authUser => {
          authUser
            ? dispatch(authAuthenticateUser(authUser))
            : dispatch(authAuthenticateUser(null))
        });
     }
  });

  return connect(null, mapDispatchToProps)(WithAuthentication);
};

export default withAuthentication;
