import styled from 'styled-components';
import store from "../../../store";
import React, {useState} from "react";
import {observer} from "mobx-react-lite";
import {useHistory} from "react-router-dom";

import classes from './style.module.css';
import { GetTrack } from '../../GetTrack';

const ListElem = styled.li`
    list-style: none;
`

const ButtonNew = styled.button`
`

const Cross = styled.b`
    cursor: pointer;
`

const ListItem = (props: any) => {
    
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    return (<ListElem className={classes.track} {...props}>
        <p className={"align-bottom " + classes['track-title']}>
            <span data-toggle="modal" data-target="#trackModal" onClick={() => setIsModalOpen(true)}>{props.track.data.name}</span>
            <Cross className="close" onClick={() => store.deleteTrack(props.track)}>✖</Cross>
        </p>
        {isModalOpen ? <GetTrack isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} trackId={props.track.id} /> : ''}
    </ListElem>);
}

export const TrackList: React.FC = observer( () => {
    //console.log(store);
    return(
        <ul className={classes['track-list']}>
            {store.tracks.map((track) => (
                <ListItem key={track.id} track={track} />
            ))}
        </ul>
    )
})

export const NewTrack: React.FC = () => {

    const history = useHistory();

    const moveToNew = () => {
        history.push('/tracks/new');
    }

    return(
        <ButtonNew className="btn btn-primary" onClick={moveToNew}>Create new Track</ButtonNew>
    )
}