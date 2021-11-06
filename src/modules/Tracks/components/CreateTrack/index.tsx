import React, { FormEvent } from "react";
import store from "../../store"
import {useHistory} from "react-router-dom";
import {handleInputs} from "../../../../shared/utils/handleInputsUpdate&Create";
import styled from "styled-components";
import {Div, Div1, Div2, P} from "../UpdateTrack";


const CreateTrack: React.FC = () => {

    const history = useHistory();

    store.track.data = {
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
        store.addTrack(store.track.data).then();
        history.push('/tracks');
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
                    <input className="form-check-input" name="published" type="checkbox" defaultChecked={store.track.data.published} onChange={handleInputs} />
                    <br/>
                    <P>Примечание: поставьте галочку, если хотите, чтобы элементы трека были доступны студентам для прохождения в обязательном последовательном порядке.</P>
                </label>
                <br />
                <br />
                <label>
                    Опубликовать &nbsp;
                    <input className="form-check-input" name="published" type="checkbox" defaultChecked={store.track.data.published} onChange={handleInputs} />
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