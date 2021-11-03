import {TrackService} from "../../../services/tracksService";

const updateTrackDetail = (trackDetailData:TrackDetailData, trackDetailId: number) =>
{
    TrackService.trackDetailUpdate(trackDetailData, trackDetailId);
    // return trackDetails.map((detail) => ({
    //     ...detail,
    //     data: detail.id === trackDetail.id ? trackDetail.data : detail.data,
    // }))
}

export default updateTrackDetail;