import React, {ChangeEvent, FormEvent, useState} from "react";
import store from "../../store"
import {useHistory} from "react-router-dom";
import {observer} from "mobx-react-lite";


const inputDate = (date : number) => new Date(date * 1000).toISOString().slice(0,16)

const handleInputs = (event: any) => {
    const target = event.target;
    const value = target.type === 'checkbox'
        ? target.checked
        : target.type === 'file'
            ? 'url'//this.uploadImage(target.value)
            : target.type === 'datetime-local'
                ? new Date(target.value).getTime() / 1000
                : target.value;
    const name = target.name;
    console.log(target.value);
    store.track.data = {
        ...store.track.data,
        [name]: value
    }
}




const EditTrack = observer(()=>{
    const history = useHistory();
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const query = store.updateTrack(store.track);
        history.push(`/tracks/${store.track.id}`);
    }
    return(
    <div className="container">
    <h4>Edit Track number {store.track.id}!</h4>
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
                    <input className="form-check-input" name="published" type="checkbox" defaultChecked={store.track.data.published} onChange={handleInputs} />
                </label>
                <br />
                <br />
                <label>
                    dateTimeStart:
                    <input className="form-control" name="dateTimeStart" type="datetime-local" onChange={handleInputs} />
                </label>
                <br />
                <br />
                <label>
                    dateTimeFinish:
                    <input className="form-control" name="dateTimeFinish" type="datetime-local" onChange={handleInputs} />
                </label>
                <br />
                <br />
                <label>
                    mode:
                    <select onChange={handleInputs}>
                        <option value="free">free</option>
                        <option value="consistent">consistent</option>
                    </select>
                </label>
                <br />
                <br />
                <input className="btn btn-primary" type="submit" value="Отправить" />
            </form>
</div>
    )})

const UpdateTrack =  (props: any) => {
    const query = store.getTrack(props.match.params.id)
    return (
        <EditTrack />
    );
}


export default UpdateTrack;