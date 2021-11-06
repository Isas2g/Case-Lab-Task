import React from "react";
import { ModalComponent } from '../../../../../../shared/components/Modal';
import "./style/style.css"
import store from "../../../../store";
import {dateFromUnix} from "../../../../../../shared/utils/timestampToHumanFormat";

interface Props {
  trackId: number;
  show: boolean;
  onHide: ModalFunc;
  data: TrackData;
  role: string|null;
}


export const TrackModal: React.FC<Props> = ({trackId, show, onHide, data, role}) => {

    store.getTrack(trackId).then();
    const track = store.track;

    const {name, previewText, published, dateTimeStart, dateTimeFinish, mode} = data;



    return (
        <ModalComponent show={show} onHide={onHide} title={name} heading={"Трек " + trackId} remove={false} track={track}>
            <p><b>Описание:</b> {previewText}</p>
            <p><b>Дата открытия трека:</b> {dateFromUnix(dateTimeStart)}</p>
            <p><b>Дата закрытия трека:</b> {dateFromUnix(dateTimeFinish)}</p>
            <p><b>Режим прохождения:</b> {mode === "free" ? "свободный" : "последовательный"}</p>
            {role === 'teacher' ? <p><b>Опубликовано:</b> {published ? "да" : "нет"}</p> : ''}
            {/*<Link to={'/tracks/' + trackId}>See track</Link>*/}
        </ModalComponent>
    )
};