import React, { Component } from 'react';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  countTotalFeedback({ good, neutral, bad }) {
    return good + neutral + bad;
  }
  countPositiveFeedbackPercentage(total, goodFeedback) {
    return Math.floor((goodFeedback * 100) / total);
  }
  onLeaveFeedback = key => {
    this.setState(prevState => {
      return { [key]: (prevState[key] += 1) };
    });
  };

  render() {
    return (
      <>
        <Section title="Please leave a feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback}
            positivePercentage={this.countPositiveFeedbackPercentage}
          />
        </Section>
      </>
    );
  }
}

export default App;
