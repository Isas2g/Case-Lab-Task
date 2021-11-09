import TrackService from "../../../services/tracksService";

const getTracks = async () => {
  const tracks: Array<Track> = await TrackService.tracks();
  return tracks;
};

export default getTracks;
