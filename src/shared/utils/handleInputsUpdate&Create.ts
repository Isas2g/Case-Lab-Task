import TrackService from "../../modules/Tracks/services/tracksService";
import store from "../../modules/Tracks/store";

export const handleInputs = async (event: any) => {
    const target = event.target;
    const actions: {[type: string]: any} = {
        'checkbox': target.checked,
        'datetime-local' : new Date(target.value).getTime() / 1000,
    }
    let value: any = actions[target.type] || target.value;
    if (target.type === "file")
        value = await TrackService.trackPreview(target.files[0]);
    console.log(value);
    const name = target.name;
    new FileReader()
    store.track.data = {
        ...store.track.data,
        [name]: value
    }
}