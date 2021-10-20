export default class Track {
  constructor(id, status, assigned, data) {
    this.id = id;
    this.status = status;
    this.assigned = assigned;
    this.data = data;
  }
  
  get id() {
      return this.id;
  }
  
  get status() {
    return this.status;
  }
  
  get assigned() {
    return this.assigned;
  }
  
  get data() {
    return this.data;
  }
}