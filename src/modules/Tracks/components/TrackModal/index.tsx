import React from "react";
import { ModalComponent } from '../../../../shared/components/Modal';
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./style/style.css"
import {storeAnnotation} from "mobx/dist/api/decorators";
import store from "../../store";

interface Props {
  trackId: number;
  show: boolean;
  onHide: ModalFunc;
  data: TrackData;
  role: string|null;
}


export const TrackModal: React.FC<Props> = ({trackId, show, onHide, data, role}) => {

    const query = store.getTrack(trackId)
    const track = store.track
    
    const {name, previewPicture, previewText, published, dateTimeStart, dateTimeFinish, mode} = data;

    const dateFromUnix = (timestamp: number) => {
        const date:Date = new Date(timestamp*1000);
        const month:number = date.getMonth();
        let monthName:string = '';
        switch (month) {
            case 0:
                monthName = 'января';
                break;
            case 1:
                monthName = 'февраля';
                break;
            case 2:
                monthName = 'марта';
                break;
            case 3:
                monthName = 'апреля';
                break;
            case 4:
                monthName = 'мая';
                break;
            case 5:
                monthName = 'июня';
                break;
            case 6:
                monthName = 'июля';
                break;
            case 7:
                monthName = 'августа';
                break;
            case 8:
                monthName = 'сентября';
                break;
            case 9:
                monthName = 'октября';
                break;
            case 10:
                monthName = 'ноября';
                break;
            case 11:
                monthName = 'декабря';
                break;
            default:
                alert('Ошибка даты!');
        }
        return `${date.getDay()} ${monthName} ${date.getFullYear()} в ${date.getHours()< 10 ? '0'+date.getHours() : date.getHours()}:${date.getMinutes()< 10 ? '0'+date.getMinutes() : date.getMinutes()} ${Intl.DateTimeFormat().resolvedOptions().timeZone}`
    }

    return (
        <ModalComponent show={show} onHide={onHide} title={name} heading={"Трек " + trackId} remove={false} track={track}>
          <p className="cardPreviewText cardContent">{previewText}</p>
            {role === 'teacher' ? <p className="cardPublished cardContent">Опубликовано: {published ? "да" : "нет"}</p> : ''}
          <p className="cardContent">Дата открытия трека: {dateFromUnix(dateTimeStart)}</p>
          <p className="cardContent">Дата закрытия трека: {dateFromUnix(dateTimeFinish)}</p>
          <p className="cardContent">Режим прохождения: {mode === "free" ? "свободный" : "последовательный"}</p>
        </ModalComponent>
    )
};