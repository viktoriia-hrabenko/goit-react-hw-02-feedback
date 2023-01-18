import { Component } from "react";
import { Section } from "components/Section/Section";
import { FeedbackOptions } from "components/FeedbackOptions/FeedbackOptions";
import { Notification } from "components/Notification/Notification";
import { Statistics } from "components/Statistics/Statistics";
import css from "../Feedback/Feedback.module.css";

export class Feedback extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    };

    handleGood = () => {
        this.setState({
            good: this.state.good + 1
        })
    }

    handleNeutral = () => {
        this.setState({
            neutral: this.state.neutral + 1
        })
    }

    handleBad = () => {
        this.setState({
            bad: this.state.bad + 1
        })
    }

    totalFeedback = () => {
        const { good, neutral, bad } = this.state;
        return good + neutral + bad;
    }

    positivePercentage = () => {
        return parseInt((this.state.good / this.totalFeedback()) * 100)
    }


    render() {
        return (
            <div className={css.Feedback}>
                <Section title="Please leave feedback">
                    <FeedbackOptions
                        handleGood={this.handleGood}
                        handleNeutral={this.handleNeutral}
                        handleBad={this.handleBad}
                    />
                </Section>

                { this.totalFeedback() === 0 ? (
                        <Notification message="There is no feedback" />
                    ):(
                          <Section title="Statistics">
                            <Statistics
                                good={this.state.good}
                                neutral={this.state.neutral}
                                bad={this.state.bad}
                                total={this.totalFeedback()}
                                positivePercentage={this.positivePercentage()}
                            />
                        </Section>  
                  )}
            </div>
        )
    }
}