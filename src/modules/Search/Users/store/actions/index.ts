import SearchService from "../../../services/searchServices";

const getUsersByQuery = async (searchQuery: string) => {
    let users: Array<User>;
    users = await SearchService.usersSearchGet(searchQuery);
    return users;
}

export default getUsersByQuery;