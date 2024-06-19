import React, { Component } from 'react';
import Statistics from '/src/components/Statistics';
import FeedbackOptions from '/src/components/FeedbackOptions';
import Notification from '/src/components/Notification';
import Section from '/src/components/Section'


class App extends Component {

  state = {
    Good : 0,
    Neutral : 0,
    Bad : 0
}

  handleClick = (option) => {
    this.setState((preState) =>({
        [option] : preState[option] + 1,
    }))
}

countTotalFeedback = () =>{
     return this.state.Good + this.state.Neutral + this.state.Bad
}

countPositiveFeedbackPercentage = () =>{
    const {Good} = this.state;
    const Total = this.countTotalFeedback()
    return (Good / Total*100).toFixed(0);
} 

    render(){
      const total = this.countTotalFeedback();
      const notificationClass = total === 0 ? '' : 'hidden';
      return (
        <>
          <Section title = "Please leave feedback">
            
            <FeedbackOptions
            options = {["Good", "Neutral", "Bad"]}
            onLeaveFeedback = {this.handleClick}/>
          </Section>

          <Section title = "Statistics">
            <Statistics 
            good = {this.state.Good}
            neutral = {this.state.Neutral}
            bad = {this.state.Bad}
            total = {this.countTotalFeedback()}
            positivePercentage = {this.countPositiveFeedbackPercentage()}
            />
          </Section>

          <div className={notificationClass}>
          <Notification 
          message = "There is no feedback"
          />
          </div>
          
        </>
      );
    }
  }
  export default App;
  