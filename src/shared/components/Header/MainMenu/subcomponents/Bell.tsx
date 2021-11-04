import bell from "../../../../assets/notification-icon.png";
import React from "react";
import {BellButton} from "../style"

export const Bell = () => {
    return(
        // <BellButton src={bell}></BellButton>
        <BellButton className="notifications align-items-center">
            <img width="30" src={bell} alt="Notification Bell" />
        </BellButton>
    )
}