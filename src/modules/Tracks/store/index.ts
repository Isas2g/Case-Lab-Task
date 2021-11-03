import {makeAutoObservable} from "mobx";
import updateTrack from "./actions/Track/Update";
import createTrack from "./actions/Track/Create";
import getTrack from "./actions/Track/ReadOne";
import getTracks from "./actions/Track/Read";
import deleteTrack from "./actions/Track/Delete";
import updateTrackDetail from "./actions/Detail/Update";
import createTrackDetail from "./actions/Detail/Create";
import getTrackDetail from "./actions/Detail/ReadOne";
import getTrackDetails from "./actions/Detail/Read";
import deleteTrackDetail from "./actions/Detail/Delete";
import getUsersByQuery from "./actions/Search/Users";

class Store {
    tracks: Array<Track> = [];
    details: Array<TrackDetail> = [];
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
    users: Array<User> = [];

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


    //TrackDetails
    async addTrackDetail(data:TrackDetailData, trackId:number) {
        this.details = await createTrackDetail(data, trackId);
        return this.details;
    }
    async getTrackDetails(trackId: number) {
        this.details = await getTrackDetails(trackId);
        return this.details;
    }
    deleteTrackDetail(trackDetail: TrackDetail) {
        this.details = deleteTrackDetail(this.details, trackDetail);
    }
    async getTrackDetail(id: number) {
        this.detail = await getTrackDetail(id);
        return this.detail;
    }
    updateTrackDetail(trackDetailData: TrackDetailData, trackDetailId: number) {
        const query = updateTrackDetail(trackDetailData, trackDetailId);
        // this.detail = trackDetail;
        return this.detail;
    }
    
    async getUsersBySearch(searchQuery: string) {
        const users = await getUsersByQuery(searchQuery);
        this.users = users;
        return this.users;
    }
}

export default new Store();