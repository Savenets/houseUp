import React, { Component } from 'react';
import PropTypes from 'prop-types';

import GoogleButton from 'Common/components/SocialButton/GoogleButton';
import { subText } from './SocialButton.css';

class SocialButtons extends Component {

  handleGoogleSubmit = data => {
    const { accessToken, w3: { U3, ofa, wea } } = data;
    this.props.handleSubmit('google', accessToken, U3, ofa, wea);
  };

  render() {
    const { headers, googleAppID } = this.props;
    return (
      <div>
        <GoogleButton
          title={headers['google']}
          appId={googleAppID}
          onSuccess={this.handleGoogleSubmit}
          onFailure={this.handleError}
        />
        <span className={subText}>or</span>
      </div>
    );
  }

}

SocialButtons.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  headers: PropTypes.shape({}).isRequired,
  googleAppID: PropTypes.string.isRequired,
  facebookAppID: PropTypes.string.isRequired,
};

export default SocialButtons;
