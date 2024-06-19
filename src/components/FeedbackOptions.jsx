import React from "react";
import propTypes from "prop-types";

function FeedbackOptions ({ options, onLeaveFeedback }) {
    return (
        <div className="buttons">
            {options.map((option) => (
                <button key={option} onClick={() => onLeaveFeedback(option)}>
                    {option}
                </button>
            ))}
        </div>
    );
}

FeedbackOptions.propTypes = {
    options : propTypes.arrayOf(propTypes.string).isRequired,
    onLeaveFeedback : propTypes.func.isRequired,
}

export default FeedbackOptions;

