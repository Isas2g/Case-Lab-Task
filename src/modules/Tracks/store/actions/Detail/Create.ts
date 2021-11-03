import {TrackService} from "../../../services/tracksService";
import getTrackDetails from "./Read";

const createTrackDetail = async (detail:TrackDetailData, trackId:number) =>
{
    await TrackService.trackDetailCreate(detail, trackId);
    return getTrackDetails(trackId);
}

export default createTrackDetail;
