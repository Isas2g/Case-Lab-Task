import {makeAutoObservable} from "mobx";
import updateTrackDetail from "../../TrackDetails/store/actions/Detail/Update";
import createTrackDetail from "../../TrackDetails/store/actions/Detail/Create";
import getTrackDetail from "../../TrackDetails/store/actions/Detail/ReadOne";
import getTrackDetails, { getTrackDetailCourses, getTrackDetailEvents } from "../../TrackDetails/store/actions/Detail/Read";
import deleteTrackDetail from "../../TrackDetails/store/actions/Detail/Delete";

class Store {
    details: Array<TrackDetail> = [];
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
    courses: Array<Course> = [];
    events: Array<Event> = [];

    constructor() {
        makeAutoObservable(this);
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
    }
    updateTrackDetail(trackDetail: TrackDetailData, detailId: number) {
        updateTrackDetail(trackDetail, this.details, detailId);
        getTrackDetail(detailId).then();
        return this.detail;
    }
    async getTrackDetailCourses(searchQuery: string) {
        this.courses = await getTrackDetailCourses(searchQuery);
    }
    async getTrackDetailEvents(searchQuery: string) {
        this.events = await getTrackDetailEvents(searchQuery);
    }
}

export default new Store();