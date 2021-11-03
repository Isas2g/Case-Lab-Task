import DetailService from "../../../services/detailsService";

const updateTrackDetail = (trackDetail:TrackDetail, trackDetails:Array<TrackDetail>): Array<TrackDetail> =>
{
    DetailService.trackDetailUpdate(trackDetail);
    return trackDetails.map((detail) => ({
        ...detail,
        data: detail.id === trackDetail.id ? trackDetail.data : detail.data,
    }))
}

export default updateTrackDetail;