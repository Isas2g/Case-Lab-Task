import store from "../../store"
import React from "react";
import {Edit, StateList} from "./style";
import {observer} from "mobx-react-lite";
import { TrackDetailList } from "../TrackDetailList";
import { TrackAssign } from "../TrackAssign";

const State = observer(() => <StateList track={store.track} />)

const EditButton = observer(() => <Edit track={store.track} />)

const GetTrack = (props: any) => {
    const query = store.getTrack(props.match.params.id);
    const role = localStorage.getItem('role');
    return (
        <div className="container">
            <h3>Трек {props.match.params.id}</h3>
            {role ? <TrackAssign trackId={props.match.params.id} /> : ''}
            <State/>
            {role === `teacher` ? <EditButton /> : ''}
            
            <TrackDetailList trackId={props.match.params.id} />
        </div>
    )
}

export default GetTrack;
