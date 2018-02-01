export const AppActionTypes = {
  eraseReducers: 'APP::ERASE:REDUCERS',
};

export default {
  eraseReducers: () => ({ type: AppActionTypes.eraseReducers }),
};
