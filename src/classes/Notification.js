export default class Notification {
  constructor(id, datetime, text, looked, data) {
    this.id = id;
    this.datetime = datetime;
    this.text = text;
    this.looked = looked;
    this.data = data;
  }
  
  get getProperty(value) {
    if (this[value]) {
      return this[value];
    } else return 'No such property in this class';
  }
}