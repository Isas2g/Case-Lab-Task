import {
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

function trackReducer(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {

        case GET_TRACK:
            //console.log(payload);
            return {...state, track: payload};

        case CREATE_TRACK:
            return {...state, track: payload}

        default:
            return state;
    }
}

export default trackReducer;