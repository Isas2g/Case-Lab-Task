import store from "../../store"
import React from "react";
import {Edit, StateList} from "./style";
import {observer} from "mobx-react-lite";

const State = observer(() => <StateList track={store.track} />)

const EditButton = observer(() => <Edit track={store.track} />)

const GetTrack = (props: any) => {
    const query = store.getTrack(props.match.params.id);
    const token = localStorage.getItem('token');
    return (
        <>
            <h3>Track {props.match.params.id} states</h3>
            <State/>
            {token === `ks8w8wow40sw8sw0o4wwo0c40s4000wgo8gg4os4` ? <EditButton /> : ''}
        </>
    )
}

export default GetTrack;