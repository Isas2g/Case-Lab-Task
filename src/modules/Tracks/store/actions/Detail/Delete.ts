import {TrackService} from "../../../services/tracksService";

const deleteTrackDetail = (trackDetails: Array<TrackDetail>, delTrackDetail: TrackDetail): Array<TrackDetail> =>
{
    TrackService.trackDetailDelete(delTrackDetail);
    return trackDetails.filter((detail) => detail.id !== delTrackDetail.id);
}

export default deleteTrackDetail;