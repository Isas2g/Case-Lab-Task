import styled from "styled-components";
import store from "../../../store";
import React, { useState } from "react";
import style from "./style.module.scss";
import { TrackModal } from "../../TrackModal";
import { DeleteModal } from "../../DeleteModal";
import {Card, Col } from "react-bootstrap";
const Cross = styled.b`
    cursor: pointer;
    position: absolute;
    top: 0px;
    right: 0px;
`

export const ListItem = (props: any) => {
    const role = localStorage.getItem("role");

    const [modalShow, setModalShow] = React.useState(false);
    const [deleteModalShow, setDeleteModalShow] = React.useState(false);

    return (
        <>
            <Col>
                <Card className={"bg-dark text-white " + style.pointer + ' ' + style.bright} onClick={() => setModalShow(true)}>
                    <Card.Img src={"https://tml10.rosatom.ru/"+props.track.data.previewPicture} alt="Card image" height={230} />
                    <Card.ImgOverlay className={"d-flex align-items-end"}>
                        <Card.Title className={style.contrast}>{props.track.data.name}</Card.Title>
                        {role === "teacher" ? <Cross className="close" onClick={() => store.deleteTrack(props.track)}>✖</Cross> : ""}
                    </Card.ImgOverlay>
                    {role === "teacher" ? <Cross className="close" onClick={() => setDeleteModalShow(true)}>✖</Cross> : ""}
                </Card>
                <TrackModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    data={props.track.data}
                    trackId={props.track.id}
                    role = {role}
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

