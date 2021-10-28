import store from "../../store"
import React from "react";
import {TrackList} from "./style"
import {NewTrack} from "./style/NewTrackButton";



function TrackListComponent() {
    const tracks = store.getTracks();
    const token = localStorage.getItem('token');
    return(
        <>
            <h3>Track list</h3>
            <TrackList />
            {token === `ks8w8wow40sw8sw0o4wwo0c40s4000wgo8gg4os4` ? <NewTrack /> : ''}
        </>
    )
}

export default TrackListComponent;
