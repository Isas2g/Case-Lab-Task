import TrackService from "../../../services/tracksService";

const updateTrack = (tracks: Array<Track>, updTrack: Track): Array<Track> => {
  TrackService.trackUpdate(updTrack);
  return tracks.map((track) => ({
    ...track,
    data: track.id === updTrack.id ? updTrack.data : track.data,
  }));
};

export default updateTrack;
