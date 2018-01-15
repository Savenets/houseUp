import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ isAuthenticated, accountName, style }) => {

  return (
    <header className={className} style={style}>
      <Logo href={logoHref} color={logoColor} small />
      { hasTitle && <h3 className={headerTitle}>{title}</h3> }
      { hasSupport && <Support {...supportBlockStyle} /> }
      {
        (isAuthenticated && accountName) && <UserQuickActions
          platform={platform}
          accountName={accountName}
        >
          { userActions }
        </UserQuickActions>
      }
    </header>
  );
};

Header.defaultProps = {
  platform: null,
  isAuthenticated: false,
  hasTitle: false,
  title: '',
  accountName: '',
  hasSupport: false,
  userActions: [],
  logoHref: '',
  style: null,
};

Header.propTypes = {
  platform: PropTypes.oneOf(['member', 'super-admin', 'dentist']),
  isAuthenticated: PropTypes.bool,
  accountName: PropTypes.string,
  hasTitle: PropTypes.bool,
  title: PropTypes.string,
  hasSupport: PropTypes.bool,
  userActions: PropTypes.array,
  logoHref: PropTypes.string,
  style: PropTypes.shape(),
};

export default Header;
