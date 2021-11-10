import { ModalComponent } from "../../../../../../shared/components/Modal";
import React from "react";
import { P } from "src/shared/styles/style";

interface Props {
  show: boolean;
  onHide: ModalFunc;
  title: string;
  track: Track;
}

export const DeleteModal: React.FC<Props> = ({ show, onHide, title, track }) => {
  return (
    <ModalComponent track={track} remove={true} title={title} show={show} onHide={onHide} heading="">
      <P>Вы действительно хотите удалить данный трек?</P>
    </ModalComponent>
  );
};
