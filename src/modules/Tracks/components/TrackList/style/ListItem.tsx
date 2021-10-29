import styled from "styled-components";
import {Link} from "react-router-dom";
import store from "../../../store";
import React, { useState } from "react";

import classes from './style.module.css';
import { TrackModal } from "../../TrackModal";

const ListElem = styled.li`
    list-style: none;
`
const Cross = styled.b`
    cursor: pointer;
`

export const ListItem = (props: any) => {

    const role = localStorage.getItem("role");
    
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    return (<ListElem className={classes.track} {...props}>
        <p className={"align-bottom " + classes['track-title']}>
            <span data-toggle="modal" data-target="#trackModal" onClick={() => setIsModalOpen(true)}>{props.track.data.name}</span>
            <Cross className="close" onClick={() => store.deleteTrack(props.track)}>✖</Cross>
        </p>
        {isModalOpen ? <TrackModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} trackId={props.track.id} /> : ''}
    </ListElem>);
}

