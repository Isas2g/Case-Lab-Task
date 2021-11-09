import React from "react";
import { ModalComponent } from '../../../../../../shared/components/Modal';

interface Props {
  show: boolean;
  onHide: ModalFunc;
  data: TrackData;
}


export const SuccessModal: React.FC<Props> = ({show, onHide, data}) => {
    const {name} = data;
    return (
        <ModalComponent show={show} onHide={onHide} title={name} heading="" remove={false} track={undefined}>
            <p>Поздравляем с успешным завершением трека "{name}"!</p>
            <p>Ты большой молодец!</p>
            <p>🤘 🤘 🤘</p>
        </ModalComponent>
    )
};