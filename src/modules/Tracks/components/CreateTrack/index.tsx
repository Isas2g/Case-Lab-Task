import React, { ChangeEvent, FormEvent } from "react";
import store from "../../store"
import {Redirect, useHistory} from "react-router-dom";

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

    const handleInputs = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement | any> ) => {
        const target = event.target;
        const value = target.type === 'checkbox'
            ? target.checked
            : target.type === 'file'
                ? 'url'//this.uploadImage(target.value)
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
        <div>
            <h4>Create a new track!</h4>
            <form onSubmit={handleSubmit}>
                <label>
                    Название:
                    <input name="name" type="text" onChange={handleInputs} />
                </label>
                <br />
                <br />
                <label>
                    Описание:
                    <textarea name="previewText" onChange={handleInputs} />
                </label>
                <br />
                <br />
                <label>
                    Картинка:
                    <input name="previewPicture" type="file" onChange={handleInputs} />
                </label>
                <br />
                <br />
                <label>
                    Опубликовать?&nbsp;
                    <input name="published" type="checkbox" checked={newTrack.published} onChange={handleInputs} />
                </label>
                <br />
                <br />
                <label>
                    dateTimeStart:
                    <input name="dateTimeStart" type="datetime-local" onChange={handleInputs} />
                </label>
                <br />
                <br />
                <label>
                    dateTimeFinish:
                    <input name="dateTimeFinish" type="datetime-local" onChange={handleInputs} />
                </label>
                <br />
                <br />
                <label>
                    mode:
                    <select onChange={handleInputs}>
                        <option value="free">free</option>
                        <option value="coconut">coconut</option>
                        <option value="mango">mango</option>
                    </select>
                </label>
                <br />
                <br />
                <input type="submit" value="Отправить" />
            </form>
        </div>
    );
};


export default CreateTrack;