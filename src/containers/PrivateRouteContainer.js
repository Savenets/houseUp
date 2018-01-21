import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { isAuthStatusAuthenticated } from '../selectors/auth';

import PrivateRoute from '../components/PrivateRoute';

const mapStateToProps = createStructuredSelector({
  isAuthenticated: isAuthStatusAuthenticated,
});

export default connect(mapStateToProps)(PrivateRoute);
