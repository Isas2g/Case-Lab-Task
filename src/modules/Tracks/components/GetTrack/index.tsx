import store from "../../store"
import React, {useState} from "react";
import { Edit, StateList, Student } from "./style";
import {observer} from "mobx-react-lite";
import { TrackDetailList } from "../../../TrackDetails/components/TrackDetailList";
import {ButtonGroup} from "react-bootstrap";
import styled from "styled-components";
import "./style/style.module.scss";

const Back = styled.div`
  background-color: #2c3034;
  background-size: cover;
  background-repeat: no-repeat;
  padding:45px;
  position: relative;
  width: 100%;
`

const Shadow = styled.div`
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  background-color:#2c3034;
  opacity: 0.3;
`
const Overlay = styled.div`
  top:0;
  left:0;
  width:100%;
  height:100%;
  z-index: 99999;
  
`

const H3 = styled.h3`
    font-size: large;
    background: #ECECEC;
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
            <div>
                <Back className="container contrast" style={{backgroundImage: `url('https://tml10.rosatom.ru/${previewPic}')`,}} >
                        <State/>
                        {role === `teacher`
                            ? <ButtonGroup>
                                <EditButton />
                                <Student trackId={props.match.params.id}/>
                            </ButtonGroup>
                            : ''
                        }
                </Back>
            </div>
            <TrackDetailList trackId={props.match.params.id} />
        </>
    )
}

export default GetTrack;
