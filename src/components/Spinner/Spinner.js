import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import LinearProgress from 'material-ui/LinearProgress';

import styles from './Spinner.css';

const Spinner = ({ message, opaque }) => (
  <div className={cx(styles.spinnerWrapper, { [styles.opaque] : opaque })} >
    <div className={styles.spinnerContent} >
      <span>{message}</span>
      <LinearProgress />
    </div>
  </div>
);

Spinner.defaultProps = {
  message: '...not so fast',
  opaque: false,
};

Spinner.propTypes = {
  message: PropTypes.string,
  opaque: PropTypes.bool,
};

export default Spinner;
