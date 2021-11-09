import DetailService from "../../../services/detailsService";

const deleteTrackDetail = (trackDetails: Array<TrackDetail>, delTrackDetail: TrackDetail): Array<TrackDetail> => {
  DetailService.trackDetailDelete(delTrackDetail);
  return trackDetails.filter((detail) => detail.id !== delTrackDetail.id);
};

export default deleteTrackDetail;
