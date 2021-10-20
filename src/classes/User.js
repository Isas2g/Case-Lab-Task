export default class User {
  constructor(id, login, fullName, data) {
    this.id = id;
    this.login = login;
    this.fullName = fullName;
    this.data = data;
  }
  
  get id() {
    return this.id;
  }
  
  get login() {
    return this.login;
  }
  
  get fullName() {
    return this.fullName;
  }
  
  get data() {
    return this.data;
  }
}