import TrackService from "../../../services/tracksService";
import getTracks from "./Read";
const createTrack = async (newData: TrackData) => {
  await TrackService.trackCreate(newData);
  return getTracks();
};

export default createTrack;
