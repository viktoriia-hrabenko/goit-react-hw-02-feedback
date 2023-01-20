import {Component} from "react";
import PropTypes from 'prop-types';
import "../FeedbackOptions/FeedbackOptions.module.css";

export class FeedbackOptions extends Component {
    render() {
        const { handleGood, handleNeutral, handleBad } = this.props;

        return (
        <div>
           <button onClick={handleGood}>Good</button>
           <button onClick={handleNeutral}>Neutral</button>
           <button onClick={handleBad}>Bad</button>
        </div>  
        )
    }
} 

FeedbackOptions.propTypes = {
  addFeedback: PropTypes.func,
};