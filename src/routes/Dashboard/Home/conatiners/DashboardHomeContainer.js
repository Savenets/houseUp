import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { missionsFetch } from '../../../../actions/missions';
import { loading, missions } from '../../../../selectors/missions';
import { token, userId, } from '../../../../selectors/auth';

import Home from '../Home';

const mapStateToProps = createStructuredSelector({
  token,
  userId,
  loading,
  missions,
});

const mapDispatchToProps = dispatch => ({
  fetchMissions: (token, userId) => {
    dispatch(missionsFetch(token, userId));
  },
  handleRemove(id) {
    //dispatch(missionRemove(id));
  },
});

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
  ...stateProps, ...dispatchProps, ...ownProps,
  fetchMissions() {
    dispatchProps.fetchMissions(stateProps.token, stateProps.userId);
  },
});

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Home);
