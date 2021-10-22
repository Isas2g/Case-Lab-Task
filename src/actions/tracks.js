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

        dispatch({
            type: GET_ALL_TRACKS,
            payload: res.data
        });

        let data = res.data.data
        let abc = new Track(data[0])
        console.log(abc)
        return Promise.resolve(data)/*Promise.resolve(data)*/
    } catch (err) {
        console.log(err)
    }
};