import {TrackService} from "../../../services/tracksService";

const getTrackDetail = async (id: number) => {
    let trackDetail: TrackDetail;
    trackDetail = await TrackService.trackDetailGet(id);
    return trackDetail;
}

export default getTrackDetail;