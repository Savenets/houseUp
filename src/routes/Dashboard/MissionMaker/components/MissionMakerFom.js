import React from 'react';
import PropTypes from 'prop-types';

import MissionMakerFormContent from './MissionMakerFormContent';
import MissionMakerForActions from './MissionMakerForActions';
import MissionList from './MissionList';
import Spinner from '../../../../components/Spinner';

const MissionMakerFom = ({ handleSubmit, invalid, submitting, errorMessage, handleAddMission, missions, handleRemove, loading, disabled }) => (
  <form noValidate onSubmit={handleSubmit}>
    <MissionMakerFormContent disabled={disabled} handleAddmission={handleAddMission} />
    { missions &&  <MissionList handleRemove={handleRemove} missions={missions} />}
    <MissionMakerForActions
      submitting={submitting}
      invalid={invalid}
    />
    {loading && <Spinner />}
  </form>
);

MissionMakerFom.defaultProps = {
  errorMessage: null,
  missions: null,
  handleRemove: null,
  loading: false,
  disabled: true,
};

MissionMakerFom.propTypes = {
  invalid: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  errorMessage: PropTypes.string,
  handleAddMission: PropTypes.func.isRequired,
  missions: PropTypes.array,
  handleRemove: PropTypes.func,
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default MissionMakerFom;
