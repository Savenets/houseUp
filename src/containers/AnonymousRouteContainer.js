import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { isAuthStatusAuthenticated } from '../selectors/auth';

import AnonymousRoute from '../components/AnonymousRoute';

const mapStateToProps = createStructuredSelector({
  isAuthenticated: isAuthStatusAuthenticated,
});

export default connect(mapStateToProps)(AnonymousRoute);
