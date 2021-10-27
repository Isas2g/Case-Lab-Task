import React, { ChangeEvent, FormEvent } from "react";

interface Props {
    createTrack: CreateTrack;
}

export const CreateTrack: React.FC<Props> = ({ createTrack }) => {
  
  const newTrack: TrackData = {
    name: 'string',
    previewText: "string",
    previewPicture: "string",
    published: true,
    dateTimeStart: 0,
    dateTimeFinish: 0,
    mode: "free"
  };
  
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    createTrack(newTrack)
        event.preventDefault();
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

        // setState({
        //     newTrack: {...state.newTrack,
        //         [name]: value
        //     }
        // });
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
                <input name="published" type="checkbox" checked={state.newTrack.published} onChange={handleInputs} />
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