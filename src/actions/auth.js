import {
    LOGIN_S,
    LOGIN_T,
} from "./types";

import AuthService from "../services/AuthService";

export const loginTeacher = () => (dispatch) => {
    dispatch({
        type: LOGIN_T,
    });
    return AuthService.loginTeacher()
}

export const loginStudent = () => (dispatch) => {
    dispatch({
        type: LOGIN_S,
    });
    return AuthService.loginStudent()
}