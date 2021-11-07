import React from "react";
import { Button } from "react-bootstrap";

import {useHistory} from "react-router-dom";
import styled from "styled-components";
import style from "./style.module.scss";


export const NewTrack: React.FC = () => {
    const history = useHistory();
    const moveToNew = () => {
        history.push("/tracks/new");
    }
    return(
        <Button className={style.addTrackButton} variant="light" onClick={moveToNew}><b>+</b></Button>
    )
}