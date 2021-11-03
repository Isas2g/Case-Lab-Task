import {makeAutoObservable} from "mobx";
import getUsersByQuery from "./actions";

class Store {
    users: Array<User> = [];

    constructor() {
        makeAutoObservable(this);
    }

    async getUsersBySearch(searchQuery: string) {
        this.users = await getUsersByQuery(searchQuery);
    }
}

export default new Store();