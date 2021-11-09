import { makeAutoObservable } from "mobx";
import { getCompany, getDeps, getUsersByQuery } from "./actions";

class Store {
  users: Array<User> = [];
  departments: Array<string> = [];
  companies: Array<string> = [];

  constructor() {
    makeAutoObservable(this);
  }

  async getUsersBySearch(searchQuery: string, dep: string, company: string) {
    this.users = await getUsersByQuery(searchQuery, dep, company);
  }

  async getDepartments() {
    this.departments = await getDeps();
  }

  async getCompanies(dep: string) {
    this.companies = await getCompany(dep);
  }
}

export default new Store();
