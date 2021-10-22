export default class Notification {
  constructor(id, datetime, text, looked, data) {
    this._id = id;
    this._datetime = datetime;
    this._text = text;
    this._looked = looked;
    this._data = data;
  }
  
  get id() {
    return this._id;
  }
  
  get datetime() {
    return this._datetime;
  }
  
  get text() {
    return this._text;
  }
  
  get looked() {
    return this._looked;
  }
  
  get data() {
    return this._data;
  }
}