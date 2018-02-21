import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { goalsFetch } from '../../../../actions/goals';
import { getGoalsInitial, loading, goals } from '../../../../selectors/goals';
import { token, userId, } from '../../../../selectors/auth';

import Home from '../Home';

const mapStateToProps = createStructuredSelector({
  token,
  userId,
  loading,
  goals,
});

const mapDispatchToProps = dispatch => ({
  fetchGoals: (token, userId) => {
    dispatch(goalsFetch(token, userId));
  },
  handleRemove(id) {
    //dispatch(goalRemove(id));
  },
});

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
  ...stateProps, ...dispatchProps, ...ownProps,
  fetchGoals() {
    dispatchProps.fetchGoals(stateProps.token, stateProps.userId);
  },
});


export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Home);
