import api from '../../../shared/services/api'
import { authHeader } from '../../../shared/services/auth-header'
import catchError from '../../../shared/services/catchError'

const TrackAssignService = {
  //trackAssign контроллер

  patchTrackAssign: (assignId: number, newStatus: Status) => {
    return api
      .patch(
        `/trackAssign/${assignId}`,
        {
          status: newStatus,
        },
        {
          headers: { ...authHeader() },
        },
      )
      .catch((er) => catchError(er))
  },

  //trackAssigns контроллеры

  trackAssigns: (trackId: number) => {
    return api
      .get(`/track/${trackId}/trackAssigns`, {
        headers: { ...authHeader() },
      })
      .then((response) => response.data.data)
      .catch((er) => catchError(er))
  },

  addTrackAssign: (trackId: number, userId: number) => {
    return api
      .post(
        `/track/${trackId}/trackAssigns`,
        [
          {
            userId: userId,
          },
        ],
        {
          headers: { ...authHeader() },
        },
      )
      .then((response) => response.data.data)
      .catch((er) => catchError(er))
  },

  deleteTrackAssign: (trackId: number, assignId: number) => {
    return api
      .delete(`/track/${trackId}/trackAssigns`, {
        headers: { ...authHeader() },
        data: [assignId],
      })
      .then((response) => response.data.success)
      .catch((er) => catchError(er))
  },
}

export default TrackAssignService
