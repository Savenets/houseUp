export const UserActionTypes = {
  userAdd: 'USER::ADD',
};

export const userAdd = payload => {
  return {
    type: UserActionTypes.userAdd,
    payload,
  }
};
