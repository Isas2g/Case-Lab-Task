import store from "../../store"
import React, {useEffect, useState} from "react";
import { Edit, StateList, Student } from "./style";
import {observer} from "mobx-react-lite";
import { TrackDetailList } from "../../../TrackDetails/components/TrackDetailList";
import {ButtonGroup} from "react-bootstrap";
import styled from "styled-components";
import "./style/style.module.scss";
import {TrackDetail} from "../../../TrackDetails/components/TrackDetail";

const Back = styled.div`
  background-color: #2c3034;
  padding:45px;
  position: relative;
  width: 100%;
  border-radius: 25px;
`

const BackImage = styled.div`
  background-size: cover;
  background-repeat: no-repeat;
  display: inline-block;
  position: absolute;
  width: 100%;
  height: 100%;
  top:0;
  left:0;
  opacity: 0.4;
  border-radius: 25px;
  filter: blur(3px);
  z-index: 10;
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

const Progress = styled.div`
      border: 1px solid black;
      border-radius: 10px;
      color: white;
      padding: 15px 32px;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      background: rgb(45, 44, 45);
      background: linear-gradient(90deg, rgb(59, 56, 56) 0%, rgb(68, 68, 66) 50%, rgb(67, 70, 67) 100%);
      background-position: 25%;
    `

const H3 = styled.h3`
    font-size: large;
    background: #ECECEC;
`
const State = observer(() => <StateList track={store.track} />);

const EditButton = observer(() => <Edit track={store.track} />);

const GetTrack = (props: any) => {
    const [trackDetails, setTrackDetails]:any = useState([]);
    const finishedCount = trackDetails.filter((trackDetail: TrackDetail) => trackDetail.finished).length;

    const progressValue = (finishedCount / trackDetails.length) * 100 || 0;

    const [previewPic, setPreviewPic] = useState('');
    store.getTrack(props.match.params.id).then(() => setPreviewPic(store.track.data.previewPicture));
    const role = localStorage.getItem('role');
    return (
        <>
                <Back className={"container contrast clearfix"}>
                    <BackImage style={{backgroundImage: `url('https://tml10.rosatom.ru/${previewPic}')`,}} />
                    <div style={{opacity: 1, zIndex: 100, }} className={"clearfix d-inline-block"}>
                        <State/>
                    {role === `teacher`
                        ?   <ButtonGroup>
                                <EditButton />
                                <Student trackId={props.match.params.id}/>
                            </ButtonGroup>
                        :   ''
                    }
                    {role === 'student'
                        ?   <Progress className="row float-end mt-auto">
                                Прогресс трека: {progressValue}%
                            </Progress>
                        :   ''
                    }
                    </div>
                </Back>
            <TrackDetailList trackId={props.match.params.id} />
        </>
    )
}

export default GetTrack;
