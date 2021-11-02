import React, {FormEvent} from "react";
import store from "../../store"
import {useHistory} from "react-router-dom";
import {observer} from "mobx-react-lite";
import TrackService from "../../services/tracksService";


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
                <input className="form-control" name="name" type="text" onChange={handleInputs} value={store.track.data.name} />
            </label>
            <br />
            <br />
            <label>
                Описание:
                <textarea className="form-control" name="previewText" onChange={handleInputs} value={store.track.data.previewText} />
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
                <input className="form-check-input" name="published" type="checkbox" checked={store.track.data.published} onChange={handleInputs} />
            </label>
            <br />
            <br />
            <label>
                dateTimeStart:
                <input className="form-control" name="dateTimeStart" type="datetime-local" onChange={handleInputs} value={inputDate(store.track.data.dateTimeStart)} />
            </label>
            <br />
            <br />
            <label>
                dateTimeFinish:
                <input className="form-control" name="dateTimeFinish" type="datetime-local" onChange={handleInputs} value={inputDate(store.track.data.dateTimeFinish)} />
            </label>
            <br />
            <br />
            <label>
                mode:
                <select name="mode" onChange={handleInputs} value={store.track.data.mode}>
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