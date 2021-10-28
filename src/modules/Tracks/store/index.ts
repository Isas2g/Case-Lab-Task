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

const getTrack = async (id: number) => {
    let track: Track;
    track = await TrackService.trackGet(id);
    return track;
}

const getTracks = async () => {
    let tracks: Array<Track>;
    tracks = await TrackService.tracks();
    return tracks;
}

class Store {
    tracks: Array<Track> = [];
    track: Track = {
        "id": 0,
        "status": "not_started",
        "assigned": false,
        "data": {
            name: "[]",
            previewText: 'string',
            previewPicture: 'string',
            published: false,
            dateTimeStart: 0,
            dateTimeFinish: 0,
            mode: 'free',
        },
    };

    constructor() {
        makeAutoObservable(this);
    }

    async addTrack(data:TrackData) {
        this.tracks = await addTrack(data);
        return this.tracks;
    }

    async getTracks() {
        this.tracks = await getTracks();
        return this.tracks;
    }

    deleteTrack(track: Track) {
        this.tracks = deleteTrack(this.tracks, track);
    }

    async getTrack(id: number) {
        this.track = await getTrack(id);
        return this.track;
    }
    updateTrack(track: Track) {
        const query = updateTrack(this.tracks, track);
        this.track = track;
        return this.track;
    }
}

export default new Store();