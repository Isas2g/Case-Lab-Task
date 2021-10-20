export default class Notification {
  constructor(id, datetime, text, looked, data) {
    this.id = id;
    this.datetime = datetime;
    this.text = text;
    this.looked = looked;
    this.data = data;
  }
  
  get id() {
    return this.id;
  }
  
  get datetime() {
    return this.datetime;
  }
  
  get text() {
    return this.text;
  }
  
  get looked() {
    return this.looked;
  }
  
  get data() {
    return this.data;
  }
}