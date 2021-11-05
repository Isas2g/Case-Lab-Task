import store from "../../store"
import React from "react";
import { Edit, StateList, Student } from "./style";
import {observer} from "mobx-react-lite";
import { TrackDetailList } from "../../../TrackDetails/components/TrackDetailList";
import { TrackAssign } from "../TrackAssign";
import { ButtonGroup } from "react-bootstrap";
import styled from "styled-components";

const Back = styled.div`
  background-color: #ECECEC;
`

const H3 = styled.h3`
    font-size: large;
    background: #ECECEC;
`

const Progress = styled.h5`
  background-color: darkorange;
  border: 1px solid black;
  border-radius: 10px;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
`

const State = observer(() => <StateList track={store.track} />);

const EditButton = observer(() => <Edit track={store.track} />);

//TODO

const StudentButton = observer(() => <Student track={store.track}/>);
// previewPicture and progress

const GetTrack = (props: any) => {
    store.getTrack(props.match.params.id);
    const role = localStorage.getItem('role');
    return (<>
        <Back className="container">
            <img src={props.match.params.previewPicture} alt="Картинка трека" />
            <H3> Трек [id:{props.match.params.id}] </H3>
            <State/>
            {role === `teacher` ?
                <ButtonGroup>
                    {role === `teacher` ? <EditButton />: ''}
                    <StudentButton />
                    {role === `teacher` ? <TrackAssign trackId={props.match.params.id} /> : ''}
                </ButtonGroup> :
                <Progress> Прогресс прохождения трека: {props.match.params.progress} </Progress>
            }
        </Back>
            <TrackDetailList trackId={props.match.params.id} />
        </>
    )
}

export default GetTrack;
