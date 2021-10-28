import store from "../../../store";
import React from "react";
import {observer} from "mobx-react-lite";
import {ListItem} from "./ListItem";


export const TrackList: React.FC = observer( () => {
    return(
        <ul>
            {store.tracks.map((track) => (
                <ListItem track={track} key={track.id}/>
            ))}
        </ul>
    )
})