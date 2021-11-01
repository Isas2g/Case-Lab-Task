import store from "../../store"
import React from "react";
import {Edit, StateList} from "./style";
import {observer} from "mobx-react-lite";

interface Props {
    id: number;
}

const State = observer(() => <StateList track={store.track} />)
const EditButton = observer(() => <Edit track={store.track} />)

const GetTrack: React.FC<Props> = ({id}) => {
    const query = store.getTrack(id);
    const token = localStorage.getItem('role');
    return (
        <div className="container">
            <h3>Track {id} states</h3>
            <State/>
            {token === `teacher` ? <EditButton /> : ''}
        </div>
    )
}

export default GetTrack;
