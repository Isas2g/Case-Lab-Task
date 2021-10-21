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
  set id(uid){
    this.id = uid;
  }
  
  get status() {
    return this.status;
  }
  set status(ustatus){
    this.status = ustatus;
  }
  
  get assigned() {
    return this.assigned;
  }
  
  get data() {
    return this.data;
  }
}