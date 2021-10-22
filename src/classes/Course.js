export default class Course {
  constructor(id, name, duration) {
    this._id = id;
    this._name = name;
    this._duration = duration;
  }
  
  get id() {
    return this._id;
  }
  
  get name() {
    return this._name;
  }
  
  get duration() {
    return this._duration;
  }
}