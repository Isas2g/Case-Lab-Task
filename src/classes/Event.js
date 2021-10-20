export default class Event {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
  
  get getProperty(value) {
    if (this[value]) {
      return this[value];
    } else return 'No such property in this class';
  }
}