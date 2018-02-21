export const GoalsActionTypes = {
  goalsFetch: 'GOALS:FETCH',
  goalsFetchStart: 'GOALS:FETCH::START',
  goalsFetchSuccess: 'GOALS:FETCH::SUCCESS',
  goalsFetchFail: 'GOALS:FETCH::FAIL',

  goalSet: 'GOAL:SET',
  goalRemove: 'GOAL:REMOVE',
  goalPostStart: 'GOAL:POST::START',
  goalPostSuccess: 'GOAL:POST::SUCCESS',
  goalPostFail: 'GOAL:POST::FAIL',
  goalPostInit: 'GOAL:POST::INIT',
  goalPost: 'GOAL:POST::INIT',
};

export const goalsFetchStart = () => {
  return {
    type: GoalsActionTypes.goalsFetchStart,
  };
};

export const goalsFetchSuccess = goals => {
  return {
    type: GoalsActionTypes.goalsFetchSuccess,
    payload: { goals },
  };
};

export const goalsFetchFail = error => {
  return {
    type: GoalsActionTypes.goalsFetchFail,
    payload: { error },
  };
};

export const goalSet = goal => {
  return {
    type: GoalsActionTypes.goalSet,
    payload: { goal },
  };
};

export const goalRemove = id => {
  return {
    type: GoalsActionTypes.goalRemove,
    payload: { id },
  };
};

export const goalPostStart = () => {
  return {
    type: GoalsActionTypes.goalPostStart,
  };
};

export const goalPostSuccess = (id, data) => {
  return {
    type: GoalsActionTypes.goalPostSuccess,
    payload: { id, data },
  };
};

export const goalPostFail = error => {
  return {
    type: GoalsActionTypes.goalPostFail,
    payload: { error },
  };
};

export const goalPostInit = () => {
  return {
    type: GoalsActionTypes.goalPostInit,
  };
};

export const goalPost = (data, token) => {
  return {
    type: GoalsActionTypes.goalPost,
    payload: { data, token },
  };
};

export const goalsFetch = (token, userId) => {
  return {
    type: GoalsActionTypes.goalsFetch,
    payload: { token, userId },
  };
};
