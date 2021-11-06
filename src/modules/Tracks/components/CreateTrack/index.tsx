import React, { ChangeEvent, FormEvent } from "react";
import store from "../../store"
import {useHistory} from "react-router-dom";
import TrackService from "../../services/tracksService";
import DetailService from "../../../TrackDetails/services/detailsService";
import styled from "styled-components";
import {Div, Div1, Div2, P} from "../UpdateTrack";


const CreateTrack: React.FC = () => {

    const history = useHistory();

    let newTrack: TrackData = {
        name: "[ERROR: EMPTY NAME!]",
        previewText: "string",
        previewPicture: "string",
        published: true,
        dateTimeStart: 0,
        dateTimeFinish: 0,
        mode: "free"
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const query = store.addTrack(newTrack);
        history.push('/tracks');
    }

    const handleInputs = async (event: any) => {
        const target = event.target;
        const value = target.type === 'checkbox'
            ? target.checked
            : target.type === 'file'
                ? await TrackService.trackPreview(target.files[0])
                : target.type === 'datetime-local'
                    ? new Date(target.value).getTime() / 1000
                    : target.value;
        const name = target.name;

        newTrack = {
            ...newTrack,
            [name]: value
        }
    }

    const Input = styled.input`
      //visibility: hidden;
    `

    return (
        <>
        <Div className="container align-center">
            <h4>Создание трека</h4>
            <form className="form-group d-flex flex-column justify-content-center" onSubmit={handleSubmit}>
                <label>
                    Название
                    <input className="form-control" name="name" type="text" onChange={handleInputs} />
                </label>
                <br />
                <br />
                <label>
                    Описание
                    <textarea className="form-control" name="previewText" onChange={handleInputs} />
                </label>
                <br />
                <br />
                <label>
                    Обложка трека
                    <br/>
                    <Input className="form-control" name="previewPicture" type="file" onChange={handleInputs} />
                </label>
                <br />
                <br />
                <Div1><label>
                    Дата начала
                    <input className="form-control" name="dateTimeStart" type="datetime-local" onChange={handleInputs} />
                </label></Div1>
                <br />
                <br />
                <Div2><label>
                    Дата окончания
                    <input className="form-control" name="dateTimeFinish" type="datetime-local" onChange={handleInputs} />
                </label></Div2>
                <br />
                <br />
                <label>
                    Последовательное прохождение трека &nbsp;
                    <input className="form-check-input" name="published" type="checkbox" defaultChecked={newTrack.published} onChange={handleInputs} />
                    <br/>
                    <P>Примечание: поставьте галочку, если Вы хотите, чтобы элементы трека были доступны студентам для прохождения в обязательном последовательном порядке.</P>
                </label>
                <br />
                <br />
                <label>
                    Опубликовать &nbsp;
                    <input className="form-check-input" name="published" type="checkbox" defaultChecked={newTrack.published} onChange={handleInputs} />
                    <br/>
                    <P>Примечание: опубликованный трек станет доступен в каталоге. Если Вы хотите продолжить редактирование курса, не ставьте галочку.</P>
                </label>
                <br />
                <br />
                <input className="btn btn-primary" type="submit" value="Подтвердить" />
            </form>
        </Div>
        </>
    );
};


export default CreateTrack;