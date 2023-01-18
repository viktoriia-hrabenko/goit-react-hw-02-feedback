import React from "react";
import "../FeedbackOptions/FeedbackOptions.module.css";

export const FeedbackOptions = ({ handleGood, handleNeutral, handleBad}) => (
    <div className="">
        <button onClick={handleGood}>Good</button>
        <button onClick={handleNeutral}>Neutral</button>
        <button onClick={handleBad}>Bad</button>
    </div>
)