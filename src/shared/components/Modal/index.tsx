import { Modal, Button } from "react-bootstrap";
import React from "react";
import store from "../../../modules/Tracks/store";

interface Props {
    title: string;
    heading: string;
    show: boolean;
    onHide: ModalFunc;
    remove: boolean;
    track: Track | undefined;
    trackId: number;
}

export const ModalComponent: React.FC<Props> = ({title, trackId, show, onHide, heading,  children, remove, track}) => {
    
    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {heading}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>{title}</h4>
                {children}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="warning" size="lg" href={'/tracks/'+ trackId}>Перейти к треку</Button>
                <Button onClick={onHide}>Отмена</Button>
                {remove && track !== undefined ? <Button onClick={() => store.deleteTrack(track)}>Удалить</Button> : ''}
            </Modal.Footer>
        </Modal>
    )
}
