import styled from 'styled-components';
import React from "react";
import {useHistory} from "react-router-dom";


const Spoiler = styled.div`
    border: 1px solid #e0e0e0;
    padding: 0 1em;
  
    .spoiler details {
    padding: 1em 0;
}
    .spoiler details + details {
    border-top: 1px solid #e0e0e0;
}
    .spoiler summary {
      font-size: large;
    color: #4d5895;
}
    .spoiler details div {
    overflow: hidden;
    padding: 1em 1em 0;
}
    .spoiler details[open] div {
    animation: spoiler 1s;
}
    @keyframes spoiler {
    0%   {max-height: 0;}
    100% {max-height: 10em;}
}
`

const Li = styled.li`
    list-style-type: none;
`

const H2 = styled.h2`
    font-size: 20px;
`

const ButtonNew = styled.button`
`

const Cross = styled.b`
    cursor: pointer;
`

export const StateList = (props: any) => {
    return(
        <ul>
            <Li key={'name'}>
                <H2>{props.track.data.name}</H2>
            </Li>
            <br/>
            <Li key={'published'}>Опубликован?  -  {props.track.data.published ? 'Да' : 'Нет'}</Li>
            <br/>
            <Spoiler>
                <details>
                    <summary>Описание</summary>
                    <div>{props.track.data.previewText}</div>
                </details>
            </Spoiler>
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
        <ButtonNew className="btn btn-primary" onClick={moveToUpdate}> Изменить трек </ButtonNew>
    )
}

//TODO

/* export const Student = (props: any) => {

    const history = useHistory();

    const moveToUpdate = () => {
        //сделать ссылку на поиск студентов history.push('');
    }

    return(
        <ButtonNew className="btn btn-primary" onClick={moveToUpdate}> Ученики трека </ButtonNew>
    )
}*/