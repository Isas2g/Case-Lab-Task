import TrackService from "../../../services/tracksService";

const getTrack = async (id: number) => {
  return await TrackService.trackGet(id);
};

export default getTrack;
