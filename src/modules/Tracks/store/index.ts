import {makeAutoObservable} from "mobx";
import {TrackService} from "../services/tracksService";

const updateTrack = (tracks: Array<Track>, updTrack: Track): Array<Track> =>
    {
        TrackService.trackUpdate(updTrack);
        return tracks.map((track) => ({
            ...track,
            data: track.id === updTrack.id ? updTrack.data : track.data,
        }))
    }

const addTrack = async (newData: TrackData) =>
    {
        await TrackService.trackCreate(newData);
        return getTracks();
    }

const deleteTrack = (tracks: Array<Track>, delTrack: Track): Array<Track> =>
    {
        TrackService.trackDelete(delTrack);
        return tracks.filter((track) => track.id != delTrack.id);
    }
const getTracks = async () => {
    //console.log('started method');
    let tracks: Array<Track>;
    tracks = await TrackService.tracks();
    //console.log(tracks);
    return tracks;
}

class Store {
    tracks: Array<Track> = [];

    constructor() {
        makeAutoObservable(this);
    }

    async addTrack(data:TrackData) {
        this.tracks = await addTrack(data);
        return this.tracks;
    }

    async getTracks() {
        //console.log('getTracks');
        this.tracks = await getTracks();
        return this.tracks;
    }

    deleteTrack(track: Track) {
        this.tracks = deleteTrack(this.tracks, track);
    }
}

export default new Store();