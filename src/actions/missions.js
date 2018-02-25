export const MissionsActionTypes = {
  missionsFetch: 'MISSIONS:FETCH',
  missionsFetchStart: 'MISSIONS:FETCH::START',
  missionsFetchSuccess: 'MISSIONS:FETCH::SUCCESS',
  missionsFetchFail: 'MISSIONS:FETCH::FAIL',

  missionSet: 'MISSIONS:SET',
  missionRemove: 'MISSIONS:REMOVE',
  missionPostStart: 'MISSIONS:POST::START',
  missionPostSuccess: 'MISSIONS:POST::SUCCESS',
  missionPostFail: 'MISSIONS:POST::FAIL',
  missionPost: 'MISSIONS:POST::INIT',
};

export const missionsFetchStart = () => {
  return {
    type: MissionsActionTypes.missionsFetchStart,
  };
};

export const missionsFetchSuccess = missions => {
  return {
    type: MissionsActionTypes.missionsFetchSuccess,
    payload: { missions },
  };
};

export const missionsFetchFail = error => {
  return {
    type: MissionsActionTypes.missionsFetchFail,
    payload: { error },
  };
};

export const missionSet = mission => {
  return {
    type: MissionsActionTypes.missionSet,
    payload: { mission },
  };
};

export const missionRemove = id => {
  return {
    type: MissionsActionTypes.missionRemove,
    payload: { id },
  };
};

export const missionPostStart = () => {
  return {
    type: MissionsActionTypes.missionPostStart,
  };
};

export const missionPostSuccess = (id, data) => {
  return {
    type: MissionsActionTypes.missionPostSuccess,
    payload: { id, data },
  };
};

export const missionPostFail = error => {
  return {
    type: MissionsActionTypes.missionPostFail,
    payload: { error },
  };
};

export const missionPost = (data, token) => {
  return {
    type: MissionsActionTypes.missionPost,
    payload: { data, token },
  };
};

export const missionsFetch = (token, userId) => {
  return {
    type: MissionsActionTypes.missionsFetch,
    payload: { token, userId },
  };
};
