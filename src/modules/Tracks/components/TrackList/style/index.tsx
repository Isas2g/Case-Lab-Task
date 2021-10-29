import store from "../../../store";
import React, {useState} from "react";
import {observer} from "mobx-react-lite";
import {useHistory} from "react-router-dom";

import classes from './style.module.css';
import {ListItem} from "./ListItem";

export const TrackList: React.FC = observer( () => {
    return(
        <ul className={classes['track-list']}>
            {store.tracks.map((track) => (
                <ListItem track={track} key={track.id}/>
            ))}
        </ul>
    )
})