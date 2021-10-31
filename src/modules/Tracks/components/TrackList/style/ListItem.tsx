import styled from "styled-components";
import store from "../../../store";
import React, { useState } from "react";
import style from "./style.module.scss";
import { TrackModal } from "../../TrackModal";
import {Button, Card, Col } from "react-bootstrap";
import { Modal } from "react-bootstrap";
const Cross = styled.b`
    cursor: pointer;
    position: absolute;
    top: 0px;
    right: 0px;
`

export const ListItem = (props: any) => {

    function MyVerticallyCenteredModal(prop:any) {
        return (
            <Modal
                {...prop}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Modal heading
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>Centered Modal</h4>
                    <p>
                        Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                        dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                        consectetur ac, vestibulum at eros.
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={prop.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }

    const role = localStorage.getItem("role");

    const [modalShow, setModalShow] = React.useState(false);

    return (
        <>
            <Col>
                <Card className={"bg-dark text-white " + style.pointer} onClick={() => setModalShow(true)}>
                    <Card.Img className={"opacity-75 " + style.bright} src={"https://tml10.rosatom.ru/"+props.track.data.previewPicture} alt="Card image" height={230} />
                    <Card.ImgOverlay className={"d-flex align-items-end"}>
                        <Card.Title className={style.contrast}>{props.track.data.name}</Card.Title>
                        {role === "teacher" ? <Cross className="close" onClick={() => store.deleteTrack(props.track)}>✖</Cross> : ""}
                    </Card.ImgOverlay>
                </Card>
                <MyVerticallyCenteredModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
            </Col>
        </>
    );
}

