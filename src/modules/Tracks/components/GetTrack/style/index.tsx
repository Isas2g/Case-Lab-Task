import styled, {keyframes} from 'styled-components';
import React from "react";
import {useHistory} from "react-router-dom";


const Spoiler = styled.div`
  border: 1px solid #e0e0e0;
  padding: 0 1em;
 `

const Summary = styled.summary`
  font-size: 2vw;
  font-family: "Roboto", sans-serif;
  border-top: none !important;


&.details[open] div{
    animation: spoiler 1s;
}

@keyframes Spoiler {
  0 % {max-height: 0;}
  100 % {max-height: 10em;}
}
`

const Details = styled.details`
  padding: 1em 0;
  border-top: 5px solid darkorange;
`

const Li = styled.li`
  list-style-type: none;
`

const H2 = styled.h2`
  
  font-weight: bold;
  text-align: left;
  vertical-align: middle;
  font-size: 3.2vw;
  padding-top: 30px;
  padding-bottom: 30px;
  height: 150px;
  width: 100%;
`

export const EditButton = styled.button`
  /* background-color: darkorange; */
  border: 1px solid black;
  border-radius: 10px;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
`

export const StudentBtn = styled.button`
  /* background-color: darkorange; */
  border: 1px solid black;
  border-radius: 10px;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
`

const Image = styled.img`
  height: 100px;
  width: 100%;
`

const Cross = styled.b`
    cursor: pointer;
`

const UlContentTrack = styled.ul`
  padding-left: 0px;
`

export const StateList = (props: any) => {
    return(
        <UlContentTrack>
            <Li key={'name'}>
                <Image src={"https://tml10.rosatom.ru/" + props.track.data.previewPicture} className="background"/>
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
            <Li key={'mode'}>Режим  -  {props.track.data.mode === 'consistent' ? 'Последовательный' : 'Свободный'}</Li>
            <br/>
        </UlContentTrack>
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
        history.push(`/tracks/students/${props.track.id}`)
    }

    return(
        <StudentBtn className="btn btn-primary" onClick={moveToUpdate}> Ученики трека </StudentBtn>
    )
}