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
        const data = res.data.data.map( (item) => {
            return new Track(item);
        } );
        console.log(data);

        dispatch({
            type: GET_ALL_TRACKS,
            payload: data
        });

        return Promise.resolve(data);
    } catch (err) {
        console.log(err);
    }
};