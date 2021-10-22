// noinspection InfiniteRecursionJS
export default class TrackDetail {
  constructor({
      id,
      trackId,
      finished,
      assigned,
      epilogId,
      epilogFinished,
      entityName,
      entityDuration,
      data
  }){
    this.id = id;
    this.trackId = trackId;
    this.finished = finished;
    this.assigned = assigned;
    this.epilogId = epilogId;
    this.epilogFinished = epilogFinished;
    this.entityName = entityName;
    this.entityDuration = entityDuration;
    this.data = data;
  }

  get id() {
    return this.id;
  }
  set id(input){
    this.id = input;
  }
  
  get trackId() {
    return this.trackId;
  }
  set trackId(input){
    this.trackId = input;
  }
  
  get finished() {
    return this.finished;
  }
  set finished(input){
    this.finished = input;
  }
  
  get assigned() {
    return this.assigned;
  }
  set assigned(input){
    this.assigned = input;
  }
  
  get epilogId() {
    return this.epilogId;
  }
  set epilogId(input){
    this.epilogId = input;
  }
  
  get epilogFinished() {
    return this.epilogFinished;
  }
  set epilogFinished(input){
    this.epilogFinished = input;
  }
  
  get entityName() {
    return this.entityName;
  }
  set entityName(input){
    this.entityName = input;
  }
  
  get entityDuration() {
    return this.entityDuration;
  }
  set entityDuration(input){
    this.entityDuration = input;
  }
  
  get data() {
    return this.data;
  }
  set data(input){
    this.data = input;
  }
}