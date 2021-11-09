import api from "../../../shared/services/api";
import { authHeader } from "../../../shared/services/auth-header";
import catchError from "../../../shared/services/catchError";

const SearchService = {
  usersSearchGet: (searchQuery: string, dep: string, company: string) => {
    return api
      .get("/search/users", {
        headers: { ...authHeader() },
        params: {
          q: searchQuery,
          department: dep,
          company: company,
        },
      })
      .then((response) => response.data)
      .catch((er) => catchError(er));
  },

  corporationDepartments: () => {
    return api
      .get("/corporation/departments", {
        headers: { ...authHeader() },
      })
      .then((response) => response.data.data)
      .catch((er) => catchError(er));
  },

  corporationCompanies: (dep: string) => {
    return api
      .get("/corporation/companies", {
        headers: { ...authHeader() },
        params: {
          department: dep,
        },
      })
      .then((response) => response.data)
      .catch((er) => catchError(er));
  },
};

export default SearchService;
