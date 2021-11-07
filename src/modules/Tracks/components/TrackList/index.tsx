import store from "../../store"
import React from "react";
import {TrackList} from "./style"
import style from "./style/style.module.scss";
import styled from "styled-components";
import {useHistory} from "react-router-dom";
import {Button} from "react-bootstrap";

interface Props {
    my: boolean;
}

export const CreateTrack: React.FC = () => {
    const history = useHistory();
    return(
        <Button variant="light" onClick={() => history.push('/tracks/new')}><b>Создать трек</b></Button>
    )
}

const Div = styled.div`
   width: 200px;
   border-radius: 0 0 10px;
 `

const TrackListComponent:React.FC<Props> = ({my}) => {
    store.getTracks().then();
    const role = localStorage.getItem("role");
    return(
            <>
                <div className={"d-flex align-items-center "}>
                    <h3 className={"p-3 " + style.trackTitle}>{my ? "Мои треки" : "Каталог треков"}</h3>
                    <Div className={"ml-auto"}>{role === "teacher" ? <CreateTrack /> : ""}</Div>
                </div>
                <TrackList my={my} />
            </>

    )
}

export default TrackListComponent;
