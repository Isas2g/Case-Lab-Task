import TrackService from "../../../services/tracksService";

const getTracks = async () => {
    let tracks: Array<Track>;
    tracks = await TrackService.tracks();
    return tracks;
}

export default getTracks;