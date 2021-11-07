import React, {FormEvent} from "react";
import store from "../../store"
import {useHistory} from "react-router-dom";
import {observer} from "mobx-react-lite";
import styled from "styled-components";
import {inputDate} from "../../../../shared/utils/timestampToInputFormat";
import {handleInputs} from "../../../../shared/utils/handleInputsUpdate&Create";

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
  color: darkgray;
    `

const EditTrack = observer(()=>{
    const history = useHistory();
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        store.updateTrack(store.track);
        history.push(`/tracks/${store.track.id}`);
    }
    return(
    <Div className="container">
    <h4>Настройки трека</h4>
        <form className="form-group d-flex flex-column justify-content-center" onSubmit={handleSubmit}>
            <label>
                Название
                <input required className="form-control" name="name" type="text" onChange={handleInputs} value={store.track.data.name} />
            </label>
            <br />
            <br />
            <label>
                Описание
                <textarea required className="form-control" name="previewText" onChange={handleInputs} value={store.track.data.previewText} />
            </label>
            <br />
            <br />
            <label>
                Обложка трека
                <input className="form-control" name="previewPicture" type="file" onChange={handleInputs} />
            </label>
            <br />
            <br />
            <Div1>
                <label>
                Дата начала
                <input required className="form-control" name="dateTimeStart" type="datetime-local" onChange={handleInputs} defaultValue={inputDate(store.track.data.dateTimeStart)} />
                </label>
            </Div1>
            <br />
            <br />
            <Div2>
                <label>
                Дата окончания
                <input required className="form-control" name="dateTimeFinish" type="datetime-local" onChange={handleInputs} defaultValue={inputDate(store.track.data.dateTimeFinish)} />
                </label>
            </Div2>
            <br />
            <br />
            <label>
                Последовательность прохождения трека
                <select name="mode" onChange={handleInputs}>
                    <option value="free">непоследовательный</option>
                    <option value="consistent">последовательный</option>
                </select>
                <br/>
                <P>Чтобы элементы трека были доступны студентам для прохождения в обязательном последовательном порядке, выберите режим «последовательный».</P>
            </label>
            <br />
            <br />
            <label>
                Опубликовать &nbsp;
                <input className="form-check-input" name="published" type="checkbox" checked={store.track.data.published} onChange={handleInputs} />
                <P>Опубликованный трек станет доступен в каталоге. Если Вы хотите продолжить редактирование курса, не ставьте галочку.</P>
            </label>
            <br />
            <br />
            <input className="btn btn-primary" type="submit" value="Отправить"></input>
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