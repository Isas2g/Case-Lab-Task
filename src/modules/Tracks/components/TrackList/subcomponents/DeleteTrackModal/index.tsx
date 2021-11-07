import { ModalComponent } from "../../../../../../shared/components/Modal"
import React from "react";

interface Props {
  show: boolean;
  onHide: ModalFunc;
  title: string;
  track: Track;
}

export const DeleteModal: React.FC<Props> = ({show, onHide, title, track}) => {
  return (
    <ModalComponent track={track} remove={true} title={title} show={show} onHide={onHide} heading="" >
    </ModalComponent>
  )
}