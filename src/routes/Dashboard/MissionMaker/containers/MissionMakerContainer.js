import { connect } from 'react-redux';
import { reduxForm, formValueSelector, change } from 'redux-form';
import { push } from 'react-router-redux';
import { createStructuredSelector } from 'reselect';
import uniqueId from 'uniqid';

import { missionSet, missionRemove, missionPost } from '../../../../actions/missions';
import { getmissionsInitial, loading } from '../../../../selectors/missions';
import { token, userId } from '../../../../selectors/auth';

import MissionMakerFom from '../components/MissionMakerFom';

const formName = 'missionMakerFom';
const formSelector = formValueSelector(formName);

const mapStateToProps = createStructuredSelector({
  missionDueDate: state => formSelector(state, 'missionDate'),
  missionAdding: state => formSelector(state, 'missionsItemsAdd'),
  missions: getmissionsInitial,
  token,
  userId,
  loading,
});

const mapDispatchToProps = dispatch => ({
  handleAddMission: (mission, dueDate) => {
    dispatch(missionSet({ mission, dueDate, id: uniqueId('mission_') }));
    dispatch(change(formName, ['missionsItemsAdd'], ''));
    dispatch(change(formName, ['missionDate'], ''));
  },
  handleRemove(id) {
    dispatch(missionRemove(id));
  },
});

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
  ...stateProps, ...dispatchProps, ...ownProps,
  handleAddMission() {
    dispatchProps.handleAddMission(stateProps.missionAdding, stateProps.missionDueDate);
  },
  async onSubmit(data, dispatch) {
    const { missionName, missionMakerDescription } = data;
    const postData = {missionName, missionMakerDescription, userId: stateProps.userId, missions: stateProps.missions};
    dispatch(missionPost(postData, stateProps.token));
    await new Promise(resolve => setTimeout(resolve, 200)); // We need this delay to make sure that Firebase Client puts data first before so to retrive fresh data
    dispatch(push({
      pathname: '/dashboard',
    }));
  },
  disabled: !(stateProps.missionAdding && stateProps.missionDueDate)
});

const missionMakerFormContainer = reduxForm({
  form: formName,
  enableReinitialize: true,
})(MissionMakerFom);

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(missionMakerFormContainer);
