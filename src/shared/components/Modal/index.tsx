import { Modal, Button } from "react-bootstrap";
import React from "react";
import "./style/style.css";
import store from "../../../modules/Tracks/store";
import { IndexLinkContainer } from "react-router-bootstrap";

interface Props {
  title: string;
  heading: string;
  show: boolean;
  onHide: ModalFunc;
  remove: boolean;
  track: Track | undefined;
}

export const ModalComponent: React.FC<Props> = ({ title, show, onHide, heading, children, remove, track }) => {
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      fullscreen={"md-down"}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">{heading}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4 className="cardTitle">{title}</h4>
        <div>{children}</div>
      </Modal.Body>
      {remove && track !== undefined ? (
        <Modal.Footer>
          <Button variant={"outline"} className={"btn fourth"} onClick={() => store.deleteTrack(track)}>
            Удалить
          </Button>
        </Modal.Footer>
      ) : (
        ""
      )}
      {heading !== "" ? (
        <Modal.Footer>
          <IndexLinkContainer to={"/tracks/" + heading.substring(5)}>
            <Button
              variant={"outline"}
              className={"btn fourth"}
              size="lg"
              disabled={localStorage.getItem("role") === "student" && !track?.assigned}
            >
              Перейти к треку
            </Button>
          </IndexLinkContainer>
        </Modal.Footer>
      ) : (
        ""
      )}
    </Modal>
  );
};
