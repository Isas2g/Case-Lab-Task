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
`

const H3 = styled.h3`
    font-size: large;
    background: #ECECEC;
`
const State = observer(() => <StateList track={store.track} />);

const EditButton = observer(() => <Edit track={store.track} />);

//TODO previewPicture

const GetTrack = (props: any) => {
    const [previewPic, setPreviewPic] = useState("");
    store.getTrack(props.match.params.id).then(() => setPreviewPic(store.track.data.previewPicture));
    const role = localStorage.getItem("role");
    return (
        <>
            <Back className="container bg-image" style={{backgroundImage: `url("https://tml10.rosatom.ru/${previewPic}")`,}}>
                <H3> Трек [id:{props.match.params.id}] </H3>
                <State/>
                {role === `teacher`
                    ? <ButtonGroup>
                        <EditButton />
                        <Student trackId={props.match.params.id}/>
                    </ButtonGroup>
                    : ""
                }
            </Back>
            <TrackDetailList trackId={props.match.params.id} />
        </>
    )
}

export default GetTrack;
