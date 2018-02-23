import React from 'react';
import PropTypes from 'prop-types';
import GoalList from './components/GoalsList';
import Spinner from '../../../components/Spinner';

import { title, homeContainer, list } from './Home.css';

class Home extends React.Component {

  componentDidMount() {
    this.props.fetchGoals();
  }

  render () {
    const { goals, loading } = this.props;

    return (
      <div className={homeContainer}>
        <h1 className={title}>Welcome!</h1>
        <p>This is your board you can view your progress here</p>
        {goals &&  <GoalList goals={goals} />}
        {loading && <Spinner />}
      </div>
    );
  }
}

Home.propTypes = {
  fetchGoals: PropTypes.func.isRequired,
  goals: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};


export default Home;
