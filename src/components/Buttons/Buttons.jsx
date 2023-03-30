import React, { Component } from 'react';
import { Title, BtnWrapper, TextStatistics } from './Buttons.styled';
export class Buttons extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    PositiveFeedback: 0,
  };

  increaseGoodStat = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
        total: prevState.total + 1,
      };
    });
  };

  insreaseNeutralStat = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
        total: prevState.total + 1,
      };
    });
  };

  increaseBadStat = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
        total: prevState.total + 1,
      };
    });
  };

  //   countTotalFeedback = () => {
  //     this.setState(prevState => {
  //       return {
  //         total: prevState.good + prevState.bad + prevState.neutral,
  //       };
  //     });
  //   };

  render() {
    const { good, neutral, bad, total } = this.state;
    return (
      <>
        <Title>Please leave feedback</Title>
        <BtnWrapper>
          <button type="button" onClick={this.increaseGoodStat}>
            Good
          </button>
          <button type="button" onClick={this.insreaseNeutralStat}>
            Neutral
          </button>
          <button type="button" onClick={this.increaseBadStat}>
            Bad
          </button>
        </BtnWrapper>
        <TextStatistics>Statistics</TextStatistics>
        <span>Good:{good}</span>
        <span>Neutral:{neutral}</span>
        <span>Bad:{bad}</span>
        <span>Total:{total}</span>
      </>
    );
  }
}
