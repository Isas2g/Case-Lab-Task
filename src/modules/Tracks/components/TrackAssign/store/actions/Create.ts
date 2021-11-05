import TrackAssignService from '../../../../services/trackAssignServices'

const createTrackAssign = async (trackId: number, userId: number) => {
  return await TrackAssignService.addTrackAssign(trackId, userId).then()
}

export default createTrackAssign
