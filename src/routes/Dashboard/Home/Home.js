import React from 'react';
import PropTypes from 'prop-types';
import GoalList from './components/GoalsList';

import { title, homeContainer, list } from './Home.css';

class Home extends React.Component {

  componentDidMount() {
    this.props.fetchGoals();
  }

  render () {
    const { goals } = this.props;

    return (
      <div className={homeContainer}>
        <h1 className={title}>Welcome!</h1>
        <p>This is your board you can view your progress here</p>
        <GoalList goals={goals} />
      </div>
    );
  }
}

Home.propTypes = {
  fetchGoals: PropTypes.func.isRequired,
  goals: PropTypes.shape().isRequired,
};


export default Home;
