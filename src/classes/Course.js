export default class Course {
  constructor(id, name, duration) {
    this.id = id;
    this.name = name;
    this.duration = duration;
  }
  
  get id() {
    return this.id;
  }
  
  get name() {
    return this.name;
  }
  
  get duration() {
    return this.duration;
  }
}