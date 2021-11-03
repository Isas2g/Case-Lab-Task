import {TrackService} from "../../../services/tracksService";

const getTrackDetails = async (id:number) => {
    const data = await TrackService.trackDetails(id);
    return data;
}

export default getTrackDetails;