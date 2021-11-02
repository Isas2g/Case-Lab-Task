import bell from "../../../shared/assets/notification-icon.png";
import React from "react";
import {BellButton} from "./style"
//import style from 'smth.css'


export const Bell = () => {
    return(
        // <BellButton src={bell}></BellButton>
        <BellButton className="notifications align-items-center">
            <img width="40" src={bell} alt="Notification Bell" />
        </BellButton>
    )
}