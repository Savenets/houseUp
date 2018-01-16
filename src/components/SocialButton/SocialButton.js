import React from 'react';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';
import { buttonActiveTextColor } from 'Common/styles/componentColors.css';

const style = {
  buttonStyle: {
    height: 48,
    marginBottom: 8,
  },
  labelStyle: {
    textTransform: 'none',
    fontWeight: 700,
  },
};

const SocialButton = ({ title, icon, onClick, href, ...rest }) => {
  return (
    <RaisedButton
      label={title}
      labelColor={rest.labelColor || buttonActiveTextColor}
      labelPosition="after"
      labelStyle={{ ...style.labelStyle, ...rest.labelStyle }}
      href={href}
      onTouchTap={onClick}
      icon={icon}
      fullWidth
      style={style.buttonStyle}
      {...rest}
    />
  );
};

SocialButton.defaultProps = {
  href: null,
  onClick: () => {},
};

SocialButton.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  href: PropTypes.string,
  onClick: PropTypes.func,
};

export default SocialButton;
