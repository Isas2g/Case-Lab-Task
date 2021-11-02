import DetailService from "../../../services/detailsService";
import getTrackDetails from "./Read";

const createTrackDetail = async (detail:TrackDetailData, trackId:number) =>
{
    await DetailService.trackDetailCreate(detail, trackId);
    return getTrackDetails(trackId);
}

export default createTrackDetail;
