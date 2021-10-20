export default class Event {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
  
  get id() {
    return this.id;
  }
  
  get name() {
    return this.name;
  }
}