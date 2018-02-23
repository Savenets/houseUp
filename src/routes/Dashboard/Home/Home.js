import React from 'react';
import PropTypes from 'prop-types';
import MissionList from './components/MissionsList';
import Spinner from '../../../components/Spinner';

import { title, homeContainer, list, description } from './Home.css';

class Home extends React.Component {

  componentDidMount() {
    this.props.fetchMissions();
  }

  render () {
    const { missions, loading } = this.props;

    return (
      <div className={homeContainer}>
        <h1 className={title}>Welcome to your board!</h1>
        <p className={description}>This is the place your home building missions to covered</p>
        {missions &&  <MissionList missions={missions} />}
        {loading && <Spinner />}
      </div>
    );
  }
}

Home.defaultProps = {
  missions: [],
};

Home.propTypes = {
  fetchMissions: PropTypes.func.isRequired,
  missions: PropTypes.array,
  loading: PropTypes.bool.isRequired,
};


export default Home;