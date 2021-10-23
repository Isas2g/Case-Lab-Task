import {
    GET_ALL_TRACKS,
    GET_TRACK,
    CREATE_TRACK,
    UPDATE_TRACK,
    DELETE_TRACK,
    GET_ASSIGN,
    CREATE_ASSIGN,
    PATCH_ASSIGN,
    DELETE_ASSIGN,
    GET_ALL_DETAILS,
    GET_DETAIL,
    CREATE_DETAIL,
    UPDATE_DETAIL,
    DELETE_DETAIL
} from "./types";

import TracksService from "../services/TracksService";
import Track from "../classes/Track";

export const getAllTracks = () => async (dispatch) => {
    try {
        const res = await new TracksService().tracks();
        if (res.data.success) {
            console.log(res.data.message + " received successful.");
        }
        const data = res.data.data.map( (item) => {
            return new Track(item);
        } );

        dispatch({
            type: GET_ALL_TRACKS,
            payload: data
        });

        return Promise.resolve(data);
    } catch (err) {
        console.log(err);
    }
};

export const getTrack = (trackId) => async (dispatch) => {
    try {
        const res = await new TracksService().trackGet(trackId);
        if (res.data.success) {
            console.log(res.data.message + " received successful.");
        }
        const data = new Track(res.data.data);
        //console.log(data);

        dispatch({
            type: GET_TRACK,
            payload: data
        });

        return Promise.resolve(data);
    } catch (err) {
        console.log(err);
    }
};

export const createTrack = (trackData) => async (dispatch) => {
    try {
        const res = await new TracksService().trackCreate(trackData);
        if (res.data.success) {
            console.log(res.data.message + " track number "+trackData.id+" \""+trackData.name+"\"");
        }
        const newTrackRes = await new TracksService().trackGet(res.data.data.id);
        const newTrack = new Track(newTrackRes.data.data);

        dispatch({
            type: CREATE_TRACK,
            payload: newTrack
        });

        return Promise.resolve(newTrack);
    } catch (err) {
        console.log(err);
    }
};

export const updateTrack = (track) => async (dispatch) => {
    try {
        const res = await new TracksService().trackUpdate(track);
        if (res.data.success) {
            console.log(res.data.message + " track number "+track.id+" \""+track.data.name+"\"");
        }

        dispatch({
            type: UPDATE_TRACK,
            payload: track
        });

        return Promise.resolve(track);
    } catch (err) {
        console.log(err);
    }
};

export const deleteTrack = (track) => async (dispatch) => {
    try {
        const res = await new TracksService().trackDelete(track);
        if (res.data.success) {
            const message = res.data.message + " track number "+track.id+" \""+track.data.name+"\"";
            console.log(message);
        }

        dispatch({
            type: DELETE_TRACK,
            payload: res.data.message
        });

        return Promise.resolve(track);
    } catch (err) {
        console.log(err);
    }
};