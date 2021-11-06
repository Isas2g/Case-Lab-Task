import store from "../../store"
import React, {useState} from "react";
import { Edit, StateList, Student } from "./style";
import {observer} from "mobx-react-lite";
import { TrackDetailList } from "../../../TrackDetails/components/TrackDetailList";
import {ButtonGroup} from "react-bootstrap";
import styled from "styled-components";

const Back = styled.div`
  background-color: #ECECEC;
  background-size: cover;
  background-repeat: no-repeat;
  padding:45px;
`

const H3 = styled.h3`
    font-size: large;
    background: #ECECEC;
`

const Progress = styled.h5`
  /* background-color: darkorange; */
  border: 1px solid black;
  border-radius: 10px;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  margin-top: 20px;
`
const State = observer(() => <StateList track={store.track} />);

const EditButton = observer(() => <Edit track={store.track} />);

//TODO previewPicture

const GetTrack = (props: any) => {
    const [previewPic, setPreviewPic] = useState('');
    store.getTrack(props.match.params.id).then(() => setPreviewPic(store.track.data.previewPicture));
    const role = localStorage.getItem('role');
    return (
        <>
            <Back className="container bg-image" style={{backgroundImage: `url('https://tml10.rosatom.ru/${previewPic}')`,}}>
                <H3> Трек [id:{props.match.params.id}] </H3>
                <State/>
                {role === `teacher`
                    ? <ButtonGroup>
                        <EditButton />
                        <Student trackId={props.match.params.id}/>
                    </ButtonGroup>
                    : ''
                }
            </Back>
            <TrackDetailList trackId={props.match.params.id} />
        </>
    )
}

export default GetTrack;
