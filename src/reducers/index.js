import { combineReducers } from "redux";
import tutorials from "./tracks";
import auth from "./auth";

export default combineReducers({
    tutorials,
    auth
});