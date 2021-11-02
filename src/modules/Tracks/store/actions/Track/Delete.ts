import {TrackService} from "../../../services/tracksService";

const deleteTrack = (tracks: Array<Track>, delTrack: Track): Array<Track> =>
{
    TrackService.trackDelete(delTrack);
    return tracks.filter((track) => track.id !== delTrack.id);
}

export default deleteTrack;