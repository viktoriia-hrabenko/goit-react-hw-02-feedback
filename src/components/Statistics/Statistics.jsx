import { Component } from 'react';
import PropTypes from 'prop-types';
import css from '../Statistics/Statistics.module.css';

export class Statistics extends Component {
    render() {
        const { good, neutral, bad, total, positivePercentage } = this.props;

        return (
            <div className={css.Statistics}>
                <span>Good: {good}</span>
                <span>Neutral: {neutral}</span>
                <span>Bad: {bad}</span>
                <span>Total: {total}</span>
                <span>Positive feedback: {positivePercentage}%</span>
            </div>
        )
    }
}

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};