import {TrackService} from "../../../services/tracksService";

const updateTrackDetail = (trackDetail:TrackDetail, trackDetails:Array<TrackDetail>): Array<TrackDetail> =>
{
    TrackService.trackDetailUpdate(trackDetail);
    return trackDetails.map((detail) => ({
        ...detail,
        data: detail.id === trackDetail.id ? trackDetail.data : detail.data,
    }))
}

export default updateTrackDetail;