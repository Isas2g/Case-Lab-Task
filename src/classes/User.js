export default class User {
  constructor(id, login, fullName, data) {
    this._id = id;
    this._login = login;
    this._fullName = fullName;
    this._data = data;
  }
  
  get id() {
    return this._id;
  }
  
  get login() {
    return this._login;
  }
  
  get fullName() {
    return this._fullName;
  }
  
  get data() {
    return this._data;
  }
}