import React from "react";
import { ModalComponent } from '../../../../shared/components/Modal';
import { Link } from "react-router-dom";
import "./style/style.css"

interface Props {
  trackId: number;
  show: boolean;
  onHide: ModalFunc;
  data: TrackData;
}

type ModalFunc = () => void;

export const TrackModal: React.FC<Props> = ({trackId, show, onHide, data}) => {
    
    const {name, previewPicture, previewText, published, dateTimeStart, dateTimeFinish, mode} = data;
    
    return (
        <ModalComponent show={show} onHide={onHide} title={name} heading="Трек">
          <p className="cardPreviewPicture cardContent">PreviewPicture: {previewPicture}</p>
          <p className="cardPreviewText cardContent">PreviewText: {previewText}</p>
          <p className="cardPublished cardContent">Published: {published}</p>
          <p className="cardContent">dateTimeStart: {dateTimeStart}</p>
          <p className="cardContent">dateTimeFinish: {dateTimeFinish}</p>
          <p className="cardContent">Mode: {mode}</p>
          
          <Link to={'/tracks/' + trackId}>See track</Link>
          
        </ModalComponent>
    )
};