import React from "react";
import { ModalComponent } from '../../../../shared/components/Modal';
import { Link } from "react-router-dom";
interface Props {
  trackId: number;
  show: boolean;
  onHide: ModalFunc;
  data: TrackData;
}


export const TrackModal: React.FC<Props> = ({trackId, show, onHide, data}) => {
    
    const {name, previewPicture, previewText, published, dateTimeStart, dateTimeFinish, mode} = data;
    
    return (
        <ModalComponent track={undefined} remove={false} show={show} onHide={onHide} title={name} heading="Трек">
          <p>PreviewPicture: {previewPicture}</p>
          <p>PreviewText: {previewText}</p>
          <p>Published: {published}</p>
          <p>dateTimeStart: {dateTimeStart}</p>
          <p>dateTimeFinish: {dateTimeFinish}</p>
          <p>Mode: {mode}</p>
          
          <Link to={'/tracks/' + trackId}>See track</Link>
          
        </ModalComponent>
    )
};