import bell from "../../../../assets/notification-icon.png";
import React from "react";
import {BellButton} from "../index"


export const Bell = () => {
    return(
        <BellButton className="notifications align-items-center">
            <img height="30" src={bell} alt="Notification Bell" />
        </BellButton>
    )
}