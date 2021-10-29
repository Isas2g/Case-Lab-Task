import React from "react";
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
        <ButtonNew className="btn btn-primary" onClick={moveToNew}>Create new Track</ButtonNew>
)
}