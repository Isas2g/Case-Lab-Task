import TrackAssignService from "../../../../services/trackAssignServices";

const getTrackAssigns = async (trackId: number) => {
  const trackAssigns: Array<TrackAssigns> = await TrackAssignService.trackAssigns(trackId);
  return trackAssigns;
};

export default getTrackAssigns;
