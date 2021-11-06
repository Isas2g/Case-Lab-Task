import React, {FormEvent} from "react";
import store from "../../store"
import {useHistory} from "react-router-dom";
import {observer} from "mobx-react-lite";
import TrackService from "../../services/tracksService";
import styled from "styled-components";


const inputDate = (date : number) => new Date(date * 1000).toISOString().slice(0,16)



const handleInputs = async (event: any) => {
    const target = event.target;
    const value = target.type === 'checkbox'
        ? target.checked
        : target.type === 'file'
            ? await TrackService.trackPreview(target.files[0])
            : target.type === 'datetime-local'
                ? new Date(target.value).getTime() / 1000
                : target.value;
    console.log(value);
    const name = target.name;
    const reader = new FileReader()
    store.track.data = {
        ...store.track.data,
        [name]: value
    }
}

export const Div = styled.div`
  width: 50%;
`

export const Div1 = styled.div`
  float: left;
  width: 25%;
`

export const Div2 = styled.div`
  float: right;
  width: 25%;
`
export const P = styled.p`
      font-size: 10px;
      color: #6c757d;
    `

const EditTrack = observer(()=>{
    const history = useHistory();
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const query = store.updateTrack(store.track);
        history.push(`/tracks/${store.track.id}`);
    }
    return(
    <Div className="container">
    <h4>Настройки трека [{store.track.id}]</h4>
        <form className="form-group d-flex flex-column justify-content-center" onSubmit={handleSubmit}>
            <label>
                Название
                <input className="form-control" name="name" type="text" onChange={handleInputs} value={store.track.data.name} />
            </label>
            <br />
            <br />
            <label>
                Описание
                <textarea className="form-control" name="previewText" onChange={handleInputs} value={store.track.data.previewText} />
            </label>
            <br />
            <br />
            <label>
                Картинка
                <input className="form-control" name="previewPicture" type="file" onChange={handleInputs} />
            </label>
            <br />
            <br />
            <label>
                Опубликовать &nbsp;
                <input className="form-check-input" name="published" type="checkbox" checked={store.track.data.published} onChange={handleInputs} />
                <P>Примечание: опубликованный трек станет доступен в каталоге. Если Вы хотите продолжить редактирование курса, не ставьте галочку.</P>
            </label>
            <br />
            <br />
            <Div1><label>
                Дата начала
                <input className="form-control" name="dateTimeStart" type="datetime-local" onChange={handleInputs} value={inputDate(store.track.data.dateTimeStart)} />
            </label></Div1>
            <br />
            <br />
            <Div2><label>
                Дата окончания
                <input className="form-control" name="dateTimeFinish" type="datetime-local" onChange={handleInputs} value={inputDate(store.track.data.dateTimeFinish)} />
            </label></Div2>
            <br />
            <br />
            <label>
                Режим
                <select name="mode" onChange={handleInputs} value={store.track.data.mode}>
                    <option value="free">свободный</option>
                    <option value="consistent">последовательный</option>
                </select>
                <P>Примечание: если Вы хотите, чтобы элементы трека были доступны студентам для прохождения в обязательном последовательном порядке, выберите режим «последовательный».</P>
            </label>
            <br />
            <br />
            <input className="btn btn-primary" type="submit" value="Подтвердить" />
        </form>
</Div>
    )})

const UpdateTrack =  (props: any) => {
    store.getTrack(props.match.params.id).then();
    return (
        <EditTrack />
    );
}


export default UpdateTrack;