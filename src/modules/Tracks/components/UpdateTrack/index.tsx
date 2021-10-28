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
    <div>
    <h4>Edit Track number {store.track.id}!</h4>
    <form onSubmit={handleSubmit}>
        <label>
            Название:
            <input name="name" value={store.track.data.name} type="text" onChange={handleInputs} />
        </label>
        <br />
        <br />
        <label>
            Описание:
            <textarea name="previewText" value={store.track.data.previewText} onChange={handleInputs} />
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
            <input name="published" type="checkbox" checked={store.track.data.published} onChange={handleInputs} />
        </label>
        <br />
        <br />
        <label>
            dateTimeStart:
            <input name="dateTimeStart" type="datetime-local" value={inputDate(store.track.data.dateTimeStart)} onChange={handleInputs} />
        </label>
        <br />
        <br />
        <label>
            dateTimeFinish:
            <input name="dateTimeFinish" type="datetime-local" value={inputDate(store.track.data.dateTimeFinish)} onChange={handleInputs} />
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
        <input type="submit" value="Отправить" />
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