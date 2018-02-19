import { connect } from 'react-redux';
import { reduxForm, formValueSelector, change } from 'redux-form';
import { createStructuredSelector } from 'reselect';
import { uniqueId } from 'lodash';

import GoalActions from '../../../../actions/goals';
import { getGoalsInitial } from '../../../../selectors/goals';

import GoalMakerFom from '../components/GoalMakerFom';

const formName = 'GoalMakerFom';
const formSelector = formValueSelector(formName);

const mapStateToProps = createStructuredSelector({
  goalAdding:  state => formSelector(state, 'goalsItemsAdd'),
  goals: getGoalsInitial,
});

const mapDispatchToProps = dispatch => ({
  handleAddGoal: goal => {
    dispatch(GoalActions.goalSet({ goal, id: uniqueId('goal_') }));
    dispatch(change(formName, ['goalsItemsAdd'], ''));
  },
  handleRemove(id) {
    dispatch(GoalActions.goalRemove(id));
  },
});


const mergeProps = (stateProps, dispatchProps, ownProps) => ({
  ...stateProps, ...dispatchProps, ...ownProps,
  handleAddGoal() {
    dispatchProps.handleAddGoal(stateProps.goalAdding);
  },
  /*async onSubmit(params, dispatch) {
    try {
      await FormHelper.submit(CheckoutActions.checkout(
        stateProps.accountId,
        stateProps.interval,
        { chargeProvider: stateProps.isPayingWithCash ? 'local' : 'stripe' },
      ), dispatch);
      await new Promise(resolve => setTimeout(resolve, 100)); // We need this delay to make sure that JSONAPI Client gets data updated before continuing
      dispatch(AddMemberFlowActions.showThankYou());
      dispatch(push({
        pathname: '/dashboard',
      }));
    } catch ({ message }) {
      FormErrorHelper.handleError(message, dispatch, message);
    }
  },*/
});

const GoalMakerFormContainer = reduxForm({
  form: formName,
})(GoalMakerFom);

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(GoalMakerFormContainer);
