import SearchService from "../../../services/searchServices";

export const getUsersByQuery = async (searchQuery: string, dep: string, company: string) => {
  const userList: Array<User> = await SearchService.usersSearchGet(searchQuery, dep, company);
  return userList.map((item) => {
    return {
      ...item,
      id: parseInt(String(item.id)),
    };
  });
};

export const getDeps = async () => {
  return await SearchService.corporationDepartments();
};

export const getCompany = async (dep: string) => {
  return await SearchService.corporationCompanies(dep);
};
