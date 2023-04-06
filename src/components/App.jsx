import React, { Component } from 'react';
import { AppWrapper } from './App.styled';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  increaseGoodStat = grade => {
    this.setState(prevState => {
      return {
        [grade]: prevState[grade] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.bad + this.state.neutral;
  };
  countPositiveFeedbackPercentage = () => {
    const countTotalFeedback = this.countTotalFeedback();
    const countWithoutGood = this.state.bad + this.state.neutral;
    const onlyGoodFeedback = countTotalFeedback - countWithoutGood;
    const a = Number(Math.round((onlyGoodFeedback * 100) / countTotalFeedback));
    if (a > 0) {
      return a;
    }
    return 0;
  };

  render() {
    const totalNumberofFeedback = this.countTotalFeedback();
    return (
      <AppWrapper>
        <Section title="Please leave feedback">
          <FeedbackOptions options={this.increaseGoodStat} />
          {totalNumberofFeedback > 0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback}
              positivePercentage={this.countPositiveFeedbackPercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </AppWrapper>
    );
  }
}
