import React from "react";
import { ModalComponent } from '../../../../../../shared/components/Modal';
import { Link, useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./style/style.css"
import {storeAnnotation} from "mobx/dist/api/decorators";
import store from "../../../../store";

interface Props {
  trackId: number;
  show: boolean;
  onHide: ModalFunc;
  data: TrackData;
  role: string|null;
}


export const TrackModal: React.FC<Props> = ({trackId, show, onHide, data, role}) => {

    store.getTrack(trackId).then();
    const track = store.track

    const {name, previewText, published, dateTimeStart, dateTimeFinish, mode} = data;
    const history = useHistory();

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

    const goToTrack = () => {
        // '/tracks/'+ trackId

        history.push('/tracks/'+ trackId);
        return;
    }

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