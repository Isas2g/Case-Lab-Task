import store from "../../store"
import React from "react";
import {Edit, StateList} from "./style";
import {observer} from "mobx-react-lite";
import { TrackDetailList } from "../TrackDetailList";

const State = observer(() => <StateList track={store.track} />)

const EditButton = observer(() => <Edit track={store.track} />)

const GetTrack = (props: any) => {
    const query = store.getTrack(props.match.params.id);
    const token = localStorage.getItem('role');
    return (
        <div className="container">
            <h3>Track {props.match.params.id} states</h3>
            <State/>
            {token === `teacher` ? <EditButton /> : ''}
            
            <TrackDetailList trackId={props.match.params.id} />
        </div>
    )
}

export default GetTrack;
