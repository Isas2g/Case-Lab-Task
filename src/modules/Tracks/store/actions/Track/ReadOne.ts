import TrackService from "../../../services/tracksService";

const getTrack = async (id: number) => {
    let track: Track;
    track = await TrackService.trackGet(id);
    return track;
}

export default getTrack;