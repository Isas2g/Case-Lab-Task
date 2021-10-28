import styled from 'styled-components';
import store from "../../../store";
import React from "react";
import {observer} from "mobx-react-lite";
import {useHistory} from "react-router-dom";


const ListElem = styled.li`
    list-style: none;
`

const ButtonNew = styled.button`
`

const Cross = styled.b`
    cursor: pointer;
`

const ListItem = (props: any) =>
    <ListElem {...props} key={props.key}>
        {props.track.data.name}
        <Cross className="close" onClick={() => store.deleteTrack(props.track)}>✖</Cross>
    </ListElem>


export const TrackList: React.FC = observer( () => {
    //console.log(store);
    return(
        <ul>
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