import React from "react";
import propTypes from "prop-types";

function Notification ({message}) {
    return(
        <div>
            <h1>{message}</h1>
        </div>
    )
}

Notification.prototype = {
    message : propTypes.string.isRequired
}

export default Notification;