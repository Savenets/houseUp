export const UiActionTypes = {
  showSuccessSnackbar: 'SNACKBAR:SUCCESS::SHOW',
  showErrorSnackbar: 'SNACKBAR:ERROR::SHOW',
  hideSnackbar: 'SNACKBAR::HIDE',
  showConfirm: 'CONFIRM::SHOW',
  hideConfirm: 'CONFIRM::HIDE',
  confirmAccepted: 'CONFIRM::ACCEPTED',
  confirmRejected: 'CONFIRM::REJECTED',
  showAlert: 'ALERT::SHOW',
  hideAlert: 'ALERT::HIDE',
};

export default {
  hideSnackbar: () => ({ type: UiActionTypes.hideSnackbar }),
  showErrorSnackbar: errorMessage => ({ type: UiActionTypes.showErrorSnackbar, payload: { message: errorMessage } }),
  showSuccessSnackbar: successMessage => ({ type: UiActionTypes.showSuccessSnackbar, payload: { message: successMessage } }),
  showConfirm: (title, description, acceptLabel, rejectLabel, acceptIsDanger, resolve, reject) => ({
    type: UiActionTypes.showConfirm,
    payload: {
      title,
      description,
      acceptLabel,
      rejectLabel,
      acceptIsDanger,
    },
    resolve,
    reject,
  }),
  hideConfirm: () => ({ type: UiActionTypes.hideConfirm }),
  confirmRejected: () => ({ type: UiActionTypes.confirmRejected }),
  confirmAccepted: () => ({ type: UiActionTypes.confirmAccepted }),
  showAlert: (title, description, okLabel) => ({
    type: UiActionTypes.showAlert,
    payload: {
      title,
      description,
      okLabel,
    },
  }),
  hideAlert: () => ({ type: UiActionTypes.hideAlert }),
};
