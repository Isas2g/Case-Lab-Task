import TrackAssignService from '../../../../services/trackAssignServices'

const deleteTrackAssign = async (trackId: number, assignId: number) => {
  return await TrackAssignService.deleteTrackAssign(trackId, assignId).then()
}

export default deleteTrackAssign
