export default class Track {
  constructor(id, status, assigned, data) {
    this.id = id;
    this.status = status;
    this.assigned = assigned;
    this.data = data;
  }
  
  get getProperty(value) {
    if (this[value]) {
      return this[value];
    } else return 'No such property in this class';
  }
}