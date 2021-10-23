import {GET_ALL_TRACKS} from '../actions/types';

const initialState = [];

function tracksReducer(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case GET_ALL_TRACKS:
            //console.log(payload);
            //console.log({...state, tracks: payload});
            return {...state, tracks: payload};

        default:
            return state;
    }
}

export default tracksReducer;