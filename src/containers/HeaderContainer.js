import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { isAuthStatusAuthenticated } from '../selectors/auth';

import Header from '../components/Header';

const mapStateToProps = createStructuredSelector({
  isAuthenticated: isAuthStatusAuthenticated,
});

export default connect(mapStateToProps)(Header);
