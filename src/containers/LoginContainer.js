import { connect } from 'react-redux';
import { signIn, signOut } from '../actions/auth';
import Login from '../components/Auth/Login';


const mapStateToProps = ({ auth }) => {
  return { auth };
};

const mapDispatchToProps = dispatch => {
  return {
    signIn() { console.log('Hello'); dispatch(signIn()); },
    signOut() { dispatch(signOut()); }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
