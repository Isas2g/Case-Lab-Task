import styled from "styled-components";
import React from "react";
import style from "./style.module.scss";
import { TrackModal } from "../subcomponents/TrackModal";
import { DeleteModal } from "../subcomponents/DeleteTrackModal";
import {Card, Col} from "react-bootstrap";
import { BsXLg } from "react-icons/bs";
import pointEr from "../../../../../shared/assets/pngwing.com.png";
import store from "src/modules/Tracks/store";

const Cross = styled.b`
    cursor: url(${pointEr}), auto;
    position: absolute;
    top: 0;
    right: 0;
    padding-right: 0.5rem;
    padding-top: 0.25rem;
    color: #575757;

`

export const ListItem = (props: any) => {
    const role :string|null = localStorage.getItem("role");
    const [modalShow, setModalShow] = React.useState(false);
    const [deleteModalShow, setDeleteModalShow] = React.useState(false);

    return (
        <>
            <Col>
                <Card bg={"black"} className={style.pointer} style={{minWidth: 250}}>
                    <Card.Img src={"https://tml10.rosatom.ru/"+props.track.data.previewPicture} alt="Card image" height={250} onClick={() => setModalShow(true)}/>
                    <div className={style.gradient}> </div>

                    <Card.ImgOverlay onClick={() => setModalShow(true)} className={"d-flex align-items-end gradient"}>
                        <Card.Title className={style.contrast}>{props.track.data.name}</Card.Title>
                    </Card.ImgOverlay>
                    {role === "teacher" ? <Cross onClick={() => setDeleteModalShow(true)}><BsXLg /></Cross> : ""}
                </Card>
                <TrackModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    data={props.track.data}
                    trackId={props.track.id}
                    role = {role}
                    track={props.track}
                />
                <DeleteModal
                    show={deleteModalShow}
                    onHide={() => setDeleteModalShow(false)}
                    title={`Удалить трек ${props.track.data.name}?`}
                    track={props.track}
                />
            </Col>
        </>
    );
}

