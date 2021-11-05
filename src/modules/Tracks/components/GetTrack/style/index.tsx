import styled, {keyframes} from 'styled-components';
import React, {useState} from "react";
import {useHistory} from "react-router-dom";
import {observer} from "mobx-react-lite";
import store from "../../TrackAssign/store";
import {Button} from "react-bootstrap";
import {ModalComponent} from "../../../../../shared/components/Modal";
import UserForm from "../../TrackAssign/subcomponents/UserForm";
import {UserList} from "../../../../Search/Users";


const Spoiler = styled.div`
  border: 1px solid #e0e0e0;
  padding: 0 1em;
 `

const Summary = styled.summary`
  font-size: 30px;
  font-family: "Helvetica Neue";
  
@keyframes Spoiler {
  0 % {max-height: 0;}
  100 % {max-height: 10em;}
}
`

const Details = styled.details`
  padding: 1em 0;
  border-top: 5px solid darkorange;
  &.details[open] div{
    animation: spoiler 1s;
  }
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

export const StudentBtn = styled.button`
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

const Image = styled.img`
  height: 100px;
  width: 100%;
`

const Cross = styled.b`
    cursor: pointer;
`

export const StateList = (props: any) => {
    const date1 = new Date(props.track.data.dateTimeStart*1000).toUTCString()
    const date2 = new Date(props.track.data.dateTimeFinish*1000).toUTCString()
    const duration  = 0;
    return(
        <ul>
            <Li key={'name'}>
                <H2>{props.track.data.name}</H2>
                <div>Время трека: {date1} - {date2}</div>
                <div>Продолжительность трека: {duration}</div>
                <script>

                </script>
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

//TODO StudentButton, duration, image


interface StudentProps {
    trackId: number;
}

export const Student = observer(({trackId}:StudentProps): JSX.Element => {

    store.readTrackAssigns(trackId).then();

    const [show, setModalShow] = useState(false);

    return (
        <>
            <StudentBtn className="btn" onClick={() => setModalShow(true)}> Ученики трека </StudentBtn>

            <ModalComponent show={show} onHide={() => setModalShow(false)} heading="Ученики трека" title=""
                            remove={false} track={undefined}>
                <h4>Список студентов:</h4>
                <UserForm/>
                <UserList trackId={trackId}/>
            </ModalComponent>
        </>
    )
})