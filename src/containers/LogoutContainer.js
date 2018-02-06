import { connect } from 'react-redux';

import { logout } from '../actions/auth';
import Logout from '../components/Auth/Logout';

const mapDispatchToProps = dispatch => ({
  logout: () => {
    dispatch(logout());
  },
});

export default connect(null, mapDispatchToProps)(Logout);
