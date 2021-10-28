import styled from "styled-components";
import {Link} from "react-router-dom";
import store from "../../../store";
import React from "react";

const ListElem = styled.li`
    list-style: none;
`
const Cross = styled.b`
    cursor: pointer;
`

export const ListItem = (props: any) =>
    <ListElem {...props}>
        <Link to={`/tracks/${props.track.id}`}>{props.track.data.name}</Link>
        <Cross className="close" onClick={() => store.deleteTrack(props.track)}>✖</Cross>
    </ListElem>

