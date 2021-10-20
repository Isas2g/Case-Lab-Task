export default class Course {
  constructor(id, name, duration) {
    this.id = id;
    this.name = name;
    this.duration = duration;
  }
  
  get getProperty(value) {
    if (this[value]) {
      return this[value];
    } else return 'No such property in this class';
  }
}