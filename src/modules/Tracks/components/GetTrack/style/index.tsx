import styled from 'styled-components';
import React from "react";
import {useHistory} from "react-router-dom";


const Spoiler = styled.div`
  border: 1px solid #e0e0e0;
  padding: 0 1em;
 `

const Summary = styled.summary`
  font-size: 30px;
  font-family: "Helvetica Neue";
`

//     &.details[open] div {
//     animation: spoiler 1s;
// }
//     @keyframes Spoiler {
//     0%   {max-height: 0;}
//     100% {max-height: 10em;}
// }

const Details = styled.details`
  padding: 1em 0;
  border-top: 5px solid darkorange;
`

const Li = styled.li`
  list-style-type: none;
`

const H2 = styled.h2`
  font-size: 50px;
  font-weight: bold;
  text-align: left;
  vertical-align: middle;
  height: 300px;
  width: 600px;
`

export const EditButton = styled.button`
  background-color: darkorange;
  border: 1px solid black;
  border-radius: 10px;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
`

export const StudentButton = styled.button`
  background-color: darkorange;
  border: 1px solid black;
  border-radius: 10px;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
`


const Cross = styled.b`
    cursor: pointer;
`

export const StateList = (props: any) => {
    return(
        <ul>
            <Li key={'name'}>
                {/*<img src={"https://tml10.rosatom.ru/" + props.track.data.previewPicture} className="background"/>*/}
                <H2>{props.track.data.name}</H2>
                {/*<div>Время трека: {props.track.data.dateTimeStart} - {props.track.data.dateTimeFinish}</div>*/}
            </Li>
            <br/>
            <Spoiler>
                <Details>
                    <Summary>Описание</Summary>
                    <div>{props.track.data.previewText}</div>
                </Details>
            </Spoiler>
            <br />
            <Li key={'published'}>Опубликован?  -  {props.track.data.published ? 'Да' : 'Нет'}</Li>
            <Li key={'published'}>Режим  -  {props.track.data.mode === 'consistent' ? 'Последовательный' : 'Свободный'}</Li>
            <br/>
        </ul>
    )
}

export const Edit = (props: any) => {

    const history = useHistory();

    const moveToUpdate = () => {
        history.push(`/tracks/edit/${props.track.id}`);
    }

    return(
        <EditButton className="btn btn-primary" onClick={moveToUpdate}> Изменить трек </EditButton>
    )
}

//TODO
//StudentButton, date's format, image

export const Student = (props: any) => {

    const history = useHistory();

    const moveToUpdate = () => {
        //сделать ссылку на список студентов history.push('');
    }

    return(
        <StudentButton className="btn btn-primary" onClick={moveToUpdate}> Ученики трека </StudentButton>
    )
}