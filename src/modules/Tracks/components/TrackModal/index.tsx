import React from "react";
import { ModalComponent } from '../../../../shared/components/Modal';
import { Link } from "react-router-dom";
interface Props {
  trackId: number;
  show: boolean;
  onHide: ModalFunc;
  data: TrackData;
  role: string|null;
}

type ModalFunc = () => void;

export const TrackModal: React.FC<Props> = ({trackId, show, onHide, data, role}) => {
    
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
        <ModalComponent show={show} onHide={onHide} title={name} heading={"Трек " + trackId} trackId={trackId}>
          {/*<p>PreviewPicture: {previewPicture}</p>*/}
          <p>{previewText}</p>
          {role === 'teacher' ? <p>Опубликовано: {published ? "да" : "нет"}</p> : ''}
          <p>Дата открытия трека: {dateFromUnix(dateTimeStart)}</p>
          <p>Дата закрытия трека: {dateFromUnix(dateTimeFinish)}</p>
          <p>Режим прохождения: {mode === "free" ? "свободный" : "последовательный"}</p>
          {/*<Link to={'/tracks/' + trackId}>See track</Link>*/}
        </ModalComponent>
    )
};