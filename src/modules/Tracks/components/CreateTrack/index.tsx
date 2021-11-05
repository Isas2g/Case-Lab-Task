import React, { FormEvent } from "react";
import store from "../../store"
import {useHistory} from "react-router-dom";
import TrackService from "../../services/tracksService";


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
        store.addTrack(newTrack);
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

    return (
        <>
        <div className="container align-center">
            <h4>Создайте новый трек!</h4>
            <form className="form-group d-flex flex-column justify-content-center" onSubmit={handleSubmit}>
                <label>
                    Название:
                    <input className="form-control" name="name" type="text" onChange={handleInputs} />
                </label>
                <br />
                <br />
                <label>
                    Описание:
                    <textarea className="form-control" name="previewText" onChange={handleInputs} />
                </label>
                <br />
                <br />
                <label>
                    Картинка:
                    <input className="form-control" name="previewPicture" type="file" onChange={handleInputs} />
                </label>
                <br />
                <br />
                <label>
                    Опубликовать?&nbsp;
                    <input className="form-check-input" name="published" type="checkbox" defaultChecked={newTrack.published} onChange={handleInputs} />
                </label>
                <br />
                <br />
                <label>
                    Дата начала:
                    <input className="form-control" name="dateTimeStart" type="datetime-local" onChange={handleInputs} />
                </label>
                <br />
                <br />
                <label>
                    Дата окончания:
                    <input className="form-control" name="dateTimeFinish" type="datetime-local" onChange={handleInputs} />
                </label>
                <br />
                <br />
                <label>
                    Последовательность:
                    <select onChange={handleInputs}>
                        <option value="free">Непоследовательный</option>
                        <option value="consistent">Последовательный</option>
                    </select>
                </label>
                <br />
                <br />
                <input className="btn btn-primary" type="submit" value="Отправить" />
            </form>
        </div>
        </>
    );
};


export default CreateTrack;