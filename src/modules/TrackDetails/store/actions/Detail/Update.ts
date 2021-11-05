import DetailService from '../../../services/detailsService'

const updateTrackDetail = (
  detailData: TrackDetailData,
  trackDetails: Array<TrackDetail>,
  detailId: number,
): Array<TrackDetail> => {
  DetailService.trackDetailUpdate(detailData, detailId).then()
  return trackDetails.map((detail) => ({
    ...detail,
    data: detail.id === detailId ? detailData : detail.data,
  }))
}

export default updateTrackDetail
