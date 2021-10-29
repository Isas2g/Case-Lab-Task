import store from "../../store"
import React from "react";
import {TrackList, NewTrack} from "./style"



function TrackListComponent() {
    const tracks = store.getTracks();
    
    const role = localStorage.getItem("role");
    return(
        <div className="container">
            <h3>Track list</h3>
            <TrackList />
            {role === "teacher" ? <NewTrack /> : ""}
        </div>
    )
}

export default TrackListComponent;