import SearchService from "../../../services/searchServices";

export const getUsersByQuery = async (searchQuery: string, dep: string, company: string) => {
    return await SearchService.usersSearchGet(searchQuery, dep, company);
}

export const getDeps = async () => {
    return await SearchService.corporationDepartments();
}

export const getCompany = async (dep:string) => {
    return await SearchService.corporationCompanies(dep);
}