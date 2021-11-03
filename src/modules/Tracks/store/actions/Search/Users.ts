import SearchService from "../../../../Search/services/searchServices";

const getUsersByQuery = async (searchQuery: string, dep: string, company: string) => {
    let users: Array<User>;
    users = await SearchService.usersSearchGet(searchQuery, dep, company);
    return users;
}

export default getUsersByQuery;