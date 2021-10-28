import store from "../../store"
import React from "react";
import {TrackList, NewTrack} from "./style"



function TrackListComponent() {
    const tracks = store.getTracks();
    return(
        <>
            <h3>Track list</h3>
            <TrackList />
            <NewTrack />
        </>
    )
}

export default TrackListComponent;
