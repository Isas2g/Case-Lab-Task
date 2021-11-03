import api from "../../../shared/services/api";
import {authHeader} from "../../../shared/services/auth-header";
import catchError from "../../../shared/services/catchError";

const SearchService = {

    usersSearchGet: (searchQuery: string) => {
        return api.get(
            `/search/users?q=${searchQuery}`,
            {
                headers: {...authHeader()}
            }
    ).then( (response) =>
            response.data
        ).catch((er) => catchError(er));
    }
}

export default SearchService;