import { combineReducers } from "redux";
import tracks from "./tracks";
import auth from "./auth";

export default combineReducers({
    tracks,
    auth
});