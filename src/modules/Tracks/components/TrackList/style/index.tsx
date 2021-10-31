import store from "../../../store";
import React, {useState} from "react";
import {observer} from "mobx-react-lite";
import {useHistory} from "react-router-dom";

import classes from './style.module.css';
import {ListItem} from "./ListItem";

interface Props {
    my: boolean;
}

export const TrackList: React.FC<Props> = observer( ({my}) => {
    const tracks = my ? store.tracks.filter(item => item.assigned) : store.tracks;
    //console.log(tracks)
    return(
        <ul className={classes['track-list']}>
            {tracks.map((track) => (
                <ListItem track={track} key={track.id}/>
            ))}
        </ul>
    )
})