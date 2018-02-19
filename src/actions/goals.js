export const GoalsActionTypes = {
  goalsFetchStart: 'GOAL:FETCH::START',
  goalsFetchSuccess: 'GOAL:FETCH::SUCCESS',
  goalsFetchFail: 'GOAL:FETCH::FAIL',
  goalSet: 'GOAL:SET',
  goalRemove: 'GOAL:REMOVE',
};

export default {
  goalsFetchStart: () => {
    return {
      type: GoalsActionTypes.goalsFetchStart
    };
  },
  goalsFetchSuccess: goals => {
    return {
      type: GoalsActionTypes.goalsFetchSuccess,
      payload: { goals }
    }
    ;
  },
  goalSet: goal => {
    return {
      type: GoalsActionTypes.goalSet,
      payload: { goal }
    };
  },
  goalRemove: id => {
    return {
      type: GoalsActionTypes.goalRemove,
      payload: { id }
    };
  },
}
