import { ModalComponent } from "../../../../shared/components/Modal";
import React from "react";
import store from "../../store";
import { Button } from "react-bootstrap";

interface Props {
  show: boolean;
  onHide: ModalFunc;
  title: string;
  trackDetail: TrackDetail;
  mutated: number;
  setMutated: SetMutatedFunc;
}

type SetMutatedFunc = (num: number) => void;

export const DetailDeleteModal: React.FC<Props> = ({ show, onHide, title, trackDetail, mutated, setMutated }) => {
  const removeTrackDetail = () => {
    store.deleteTrackDetail(trackDetail);
    setMutated(mutated + 1);
  };

  return (
    <ModalComponent track={undefined} remove={true} title={title} show={show} onHide={onHide} heading="">
      <p>Вы уверены, что хотите удалить элемент трека "{trackDetail.entityName}"?</p>
      <Button variant={"outline"} className={"btn fourth float-end"} onClick={removeTrackDetail}>
        Удалить
      </Button>
    </ModalComponent>
  );
};
