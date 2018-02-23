import { connect } from 'react-redux';
import { reduxForm, formValueSelector, change } from 'redux-form';
import { push } from 'react-router-redux';
import { createStructuredSelector } from 'reselect';
import uniqueId from 'uniqid';

import { goalSet, goalRemove, goalPost } from '../../../../actions/goals';
import { getGoalsInitial, loading } from '../../../../selectors/goals';
import { token, userId } from '../../../../selectors/auth';

import GoalMakerFom from '../components/GoalMakerFom';

const formName = 'GoalMakerFom';
const formSelector = formValueSelector(formName);

const mapStateToProps = createStructuredSelector({
  goalDueDate: state => formSelector(state, 'goalDate'),
  goalAdding: state => formSelector(state, 'goalsItemsAdd'),
  goals: getGoalsInitial,
  token,
  userId,
  loading,
});

const mapDispatchToProps = dispatch => ({
  handleAddGoal: (goal, dueDate) => {
    dispatch(goalSet({ goal, dueDate, id: uniqueId('goal_') }));
    dispatch(change(formName, ['goalsItemsAdd'], ''));
    dispatch(change(formName, ['goalDate'], ''));
  },
  handleRemove(id) {
    dispatch(goalRemove(id));
  },
});

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
  ...stateProps, ...dispatchProps, ...ownProps,
  handleAddGoal() {
    dispatchProps.handleAddGoal(stateProps.goalAdding, stateProps.goalDueDate);
  },
  async onSubmit(data, dispatch) {
    const { goalName, goalMakerDescription } = data;
    const postData = {goalName, goalMakerDescription, userId: stateProps.userId, goals: stateProps.goals};
    dispatch(goalPost(postData, stateProps.token));
    await new Promise(resolve => setTimeout(resolve, 200)); // We need this delay to make sure that Firebase Client puts data first before so to retrive fresh data
    dispatch(push({
      pathname: '/dashboard',
    }));
  },
  disabled: !(stateProps.goalAdding && stateProps.goalDueDate)
});

const GoalMakerFormContainer = reduxForm({
  form: formName,
  enableReinitialize: true,
})(GoalMakerFom);

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(GoalMakerFormContainer);
