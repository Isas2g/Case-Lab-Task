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
} from '../actions/types';

const initialState = [];

function trackReducer(tracks = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case GET_ALL_TRACKS:
            return payload;

        default:
            return tracks;
    }
}

export default trackReducer;