import {TrackService} from "../../../services/tracksService";

const getUsersByQuery = async (searchQuery: string) => {
    let users: Array<User>;
    users = await TrackService.usersSearchGet(searchQuery);
    return users;
}

export default getUsersByQuery;