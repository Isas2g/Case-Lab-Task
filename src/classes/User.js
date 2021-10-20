export default class User {
  constructor(id, login, fullName, data) {
    this.id = id;
    this.login = login;
    this.fullName = fullName;
    this.data = data;
  }
  
  get getProperty(value) {
    if (this[value]) {
      return this[value];
    } else return 'No such property in this class';
  }
}