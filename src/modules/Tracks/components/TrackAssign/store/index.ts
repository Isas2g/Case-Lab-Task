import {makeAutoObservable} from "mobx";
import getTrackAssigns from "./actions/Read";
import addTrackAssign from "./actions/Create";
import removeTrackAssign from "./actions/Delete";
import patchTrackAssign from "./actions/Update";


class Store {
    assigns: Array<TrackAssigns> = [];

    constructor() {
        makeAutoObservable(this);
    }

    async readTrackAssigns(trackId: number) {
        this.assigns = await getTrackAssigns(trackId);
    }

    createTrackAssign(trackId: number, userId: number) {
        addTrackAssign(trackId, userId).then(() => this.readTrackAssigns(trackId));
    }

    deleteTrackAssign(trackId: number, assignId: number) {
        removeTrackAssign(trackId, assignId).then(() => this.readTrackAssigns(trackId));
    }

    updateTrackAssign(assignId: number, status: Status) {
        patchTrackAssign(assignId, status).then();
    }
}

export default new Store;