import styled from 'styled-components';
import React from "react";
import {useHistory} from "react-router-dom";


const ListElem = styled.li`
    list-style: none;
`

const ButtonNew = styled.button`
`

const Cross = styled.b`
    cursor: pointer;
`

export const StateList = (props: any) => {
    return(
        <ul>
            <li key={'name'}>Название: {props.track.data.name}</li>
            <br />
            <li key={'text'}>Описание: {props.track.data.previewText}</li>
            <br />
            <li key={'published'}>Опубликован?  -  {props.track.data.published ? 'Да!' : 'Нет.'}</li>
            <br />
        </ul>
    )
}

export const Edit = (props: any) => {

    const history = useHistory();

    const moveToUpdate = () => {
        history.push(`/tracks/edit/${props.track.id}`);
    }

    return(
        <ButtonNew className="btn btn-primary" onClick={moveToUpdate}>Редактировать</ButtonNew>
    )
}