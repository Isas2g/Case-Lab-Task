import {makeAutoObservable} from "mobx";
import updateTrack from "./actions/Track/Update";
import createTrack from "./actions/Track/Create";
import getTrack from "./actions/Track/ReadOne";
import getTracks from "./actions/Track/Read";
import deleteTrack from "./actions/Track/Delete";

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
    detail: TrackDetail = {
        "id": 0,
        "trackId": 0,
        "finished": false,
        "assigned": false,
        "epilogId": 0,
        "epilogFinished": false,
        "entityName": '',
        "entityDuration": '',
        "data": {
           "type": 'event',
            "entityId": 0,
            "sortIndex": 0,
            "required": false,
        },
    };

    constructor() {
        makeAutoObservable(this);
    }


    //Track
    async addTrack(data:TrackData) {
        this.tracks = await createTrack(data);
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