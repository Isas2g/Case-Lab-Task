export default class Track {
  constructor({id, status, assigned, data}) {
    this._id = id;
    this._status = status;
    this._assigned = assigned;
    this._data = data;
  }
  
  get id() {
      return this._id;
  }
  get status() {
    return this._status;
  }
  set status(value){
    this._status = value;
  }
  
  get assigned() {
    return this._assigned;
  }
  set assigned(value){
    this._status = value;
  }
  
  get data() {
    return this._data;
  }
  set data(value){
    this._status = value;
  }
}