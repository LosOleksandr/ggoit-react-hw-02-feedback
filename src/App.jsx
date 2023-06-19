import React, { Component } from 'react';
import Section from 'components/Section/Section';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Statistics from 'components/Statistics/Statistics';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = evt => {
    this.setState(prevState => {
      const btnName = evt.target.name;
      return {
        [btnName]: prevState[btnName] + 1,
      };
    });
  };

  getTotalFeedbacks = () => {
    return Object.values(this.state).reduce((acc, value) => acc + value, 0);
  };

  getPercentage = () => {
    return Number(
      ((this.state.good / this.getTotalFeedbacks()) * 100).toFixed()
    );
  };

  render() {
    return (
      <div>
        <Section title="Please leave your feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {this.getTotalFeedbacks() ? (
            <Statistics
              options={this.state}
              total={this.getTotalFeedbacks()}
              percentage={this.getPercentage()}
            />
          ) : (
            <p>No feedback given!</p>
          )}
        </Section>
      </div>
    );
  }
}
