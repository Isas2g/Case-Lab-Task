import DetailService from '../../../../TrackDetails/services/detailsService'

const getTrackDetails = async (id: number) => {
  const data = await DetailService.trackDetails(id)
  return data
}

export default getTrackDetails
