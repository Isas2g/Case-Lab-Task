import React from "react";
import { ModalComponent } from "../../../../../../shared/components/Modal";
import "./style/style.css"
import {dateFromUnix} from "../../../../../../shared/utils/timestampToHumanFormat";
import {observer} from "mobx-react-lite";
import {P} from 'src/shared/styles/style'

interface Props {
  trackId: number;
  show: boolean;
  onHide: ModalFunc;
  data: TrackData;
  role: string|null;
  track: Track|undefined;
}


export const TrackModal: React.FC<Props> = observer(({trackId, show, onHide, data, role, track}) => {
    const {name, previewText, published, dateTimeStart, dateTimeFinish, mode} = data;
    return (
        <ModalComponent show={show} onHide={onHide} title={name} heading={"Трек " + trackId} remove={false} track={track}>
            <P><b>Описание:</b> {previewText}</P>
            <P><b>Дата открытия трека:</b> {dateFromUnix(dateTimeStart)}</P>
            <P><b>Дата закрытия трека:</b> {dateFromUnix(dateTimeFinish)}</P>
            <P><b>Режим прохождения:</b> {mode === "free" ? "свободный" : "последовательный"}</P>
            {role === 'teacher' ? <P><b>Опубликовано:</b> {published ? "да" : "нет"}</P> : ''}
        </ModalComponent>
    )
})