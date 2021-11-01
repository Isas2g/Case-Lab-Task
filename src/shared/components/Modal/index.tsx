import { Modal, Button } from "react-bootstrap";
import React from "react";
import styled from "styled-components";
import store from "../../../modules/Tracks/store";

interface ImgProps {
    picture: string;
}

const BlackBack = styled.div`
  background-color: #000;
`;

const ImageBack = styled.div.attrs((props:ImgProps) => ({
    picture: props.picture,
}))<ImgProps>`
  background: url(${props => 'https://tml10.rosatom.ru/'+props.picture}) no-repeat center bottom;
  background-size: cover;
  opacity: 0.7;
`;

interface Props {
    title: string;
    heading: string;
    show: boolean;
    onHide: ModalFunc;
    remove: boolean;
    track: Track | undefined;
    trackId: number;
    previewText: string;
    previewPicture: string;
}

type ModalFunc = () => void;

export const ModalComponent: React.FC<Props> = ({title, trackId, show, onHide, heading, children, previewText, previewPicture, remove, track}) => {

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <BlackBack>
            <ImageBack picture={previewPicture}>
                <Modal.Header closeButton style={{opacity: 1}}>
                    <Modal.Title id="contained-modal-title-vcenter">
                        {heading}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>{title}</h4>
                    <p>{previewText}</p>
                </Modal.Body>
            </ImageBack>
            </BlackBack>
            <Modal.Body>
                {children}
            </Modal.Body>
            <Modal.Footer>
                {remove && track !== undefined
                    ? <Button onClick={() => store.deleteTrack(track)}>Удалить</Button>
                    : <Button variant="warning" size="lg" href={'/tracks/'+ trackId}>Перейти к треку</Button>}
            </Modal.Footer>
        </Modal>
    )
}
