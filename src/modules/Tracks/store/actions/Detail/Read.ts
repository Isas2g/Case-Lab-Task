import {TrackService} from "../../../services/tracksService";

const getTrackDetails = async (id:number) => {
    let trackDetails: Array<TrackDetail>;
    trackDetails = await TrackService.trackDetails(id);
    return trackDetails;
}

export default getTrackDetails;