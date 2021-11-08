import store from "../../store"
import React from "react";
import {TrackList} from "./style"
import style from "./style/style.module.scss";
import styled from "styled-components";
import {useHistory} from "react-router-dom";
import {Button} from "react-bootstrap";
import { IndexLinkContainer } from "react-router-bootstrap";
import 'src/shared/styles/style.css'
import {DIV, H2} from 'src/shared/styles/style'

interface Props {
    my: boolean;
}

export const CreateTrack: React.FC = () => {
    const history = useHistory();
    return(
        <IndexLinkContainer to={"/tracks/new"}><button className="btn fourth">Создать трек</button></IndexLinkContainer>
    )
}

const TrackListComponent:React.FC<Props> = ({my}) => {
    store.getTracks().then();
    const role = localStorage.getItem("role");
    const history = useHistory();
    return(
            <>
                <DIV className={"d-flex align-items-center justify-content-between"}>
                    <H2>{my ? "Мои треки" : ""}</H2>
                    <div>{role === "teacher" ? <CreateTrack /> : ""}</div>
                </DIV>
                <TrackList my={my} />
            </>

    )
}

export default TrackListComponent;
