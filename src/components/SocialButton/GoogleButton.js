import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GoogleLogin from 'react-google-login';

import GoogleIcon from '../../styles/icons/GoogleIcon';
import { socialGoogleButton, socialButtonContentWrapper } from './SocialButton.css';

class GoogleButton extends Component {

  callbackFailure = this.props.onFailure

  callbackSuccess = this.props.onSuccess

  render() {
    const { title, appId } = this.props;
    return (
      <GoogleLogin
        clientId={appId}
        onSuccess={this.callbackSuccess}
        onFailure={this.callbackFailure}
        className={socialGoogleButton}
      >
        <span className={socialButtonContentWrapper}>
          <GoogleIcon />
          {title}
        </span>
      </GoogleLogin>
    );
  }
}

GoogleButton.defaultProps = {
  onFailure: () => {},
};

GoogleButton.propTypes = {
  title: PropTypes.string.isRequired,
  appId: PropTypes.string.isRequired,
  onSuccess: PropTypes.func.isRequired,
  onFailure: PropTypes.func,
};

export default GoogleButton;
