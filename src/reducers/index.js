import { combineReducers } from "redux";
import tracks from "./tracks";
import track from "./track";
import auth from "./auth";

export default combineReducers({
    tracks,
    track,
    auth
});