export default class Track {
  constructor({id, status, assigned, data}) {
    this.id = id;
    this.status = status;
    this.assigned = assigned;
    this.data = data;
  }
  
  get id() {
      return this.id;
  }
  set id(seid){
    this.id = seid;
  }
  
  get status() {
    return this.status;
  }
  set status(sestatus){
    this.status = sestatus;
  }
  
  get assigned() {
    return this.assigned;
  }
  set assigned(seassigned){
    this.status = seassigned;
  }
  
  get data() {
    return this.data;
  }
  set data(sedata){
    this.status = sedata;
  }
}