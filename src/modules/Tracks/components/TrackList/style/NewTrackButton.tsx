import React from "react";
import { Button } from "react-bootstrap";
import {useHistory} from "react-router-dom"
import styled from "styled-components";


const ButtonNew = styled.button`
`

export const NewTrack: React.FC = () => {

    const history = useHistory();

    const moveToNew = () => {
        history.push('/tracks/new');
    }

    return(
        <Button variant="warning"  onClick={moveToNew}><b>Создать трек</b></Button>
)
}