import SearchService from "../services/searchServices";

const getUsersByQuery = async (searchQuery: string, dep: string, company: string) => {
    return SearchService.usersSearchGet(searchQuery, dep, company);
}

export default getUsersByQuery;