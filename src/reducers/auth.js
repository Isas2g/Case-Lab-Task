import {LOGIN_T, LOGIN_S} from "../actions/types";

const token = localStorage.getItem('token');

const initialState = {
    'token': token
}

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case LOGIN_S:
            return {
                ...state
            };
        case LOGIN_T:
            return {
                ...state
            }
        default:
            return state;
    }
}