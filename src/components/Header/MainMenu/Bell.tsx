import bell from "../../../shared/assets/notification-icon.png";
import React from "react";


export const Bell = () => {
    return(
        <div className="notifications align-items-center" style={{marginLeft: 40,}}>
            <img width="40" src={bell} alt="Notification Bell" />
        </div>
    )
}