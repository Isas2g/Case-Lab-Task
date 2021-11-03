import {makeAutoObservable} from "mobx";
import getUsersByQuery from "./actions";

class Store {
    users: Array<User> = [];

    constructor() {
        makeAutoObservable(this);
    }

    async getUsersBySearch(searchQuery: string) {
        const items: User[] = await getUsersByQuery(searchQuery)
        this.users = items;
    }
}

export default new Store();