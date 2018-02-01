import { connect } from 'react-redux';

import AuthActions from '../actions/auth';
import Logout from '../components/Logout';

const mapDispatchToProps = dispatch => ({
  logout: () => {
    dispatch(AuthActions.authLogout())
  },
});

export default connect(null, mapDispatchToProps)(Logout);
