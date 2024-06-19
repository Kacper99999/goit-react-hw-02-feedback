import React from "react"
import '/src/components/styles.css';
import propTypes from "prop-types";

function Statistics({good, neutral, bad, total, positivePercentage}){
    return(
        <div className={total === 0 ? "stat-non" : "stat-yes"}>
            <p>Good : {good}</p>
            <p>Neutral : {neutral}</p>
            <p>Bad : {bad}</p>
            <p>Positive Feedback : {positivePercentage}%</p>
        </div>
    )   
}

Statistics.propTypes = {
    good : propTypes.number.isRequired,
    neutral : propTypes.number.isRequired,
    bad : propTypes.number.isRequired,
    total : propTypes.func.isRequired,
    positivePercentage : propTypes.func.isRequired
}

export default Statistics