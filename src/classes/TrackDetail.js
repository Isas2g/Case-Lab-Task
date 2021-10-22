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
    this._id = id;
    this._trackId = trackId;
    this._finished = finished;
    this._assigned = assigned;
    this._epilogId = epilogId;
    this._epilogFinished = epilogFinished;
    this._entityName = entityName;
    this._entityDuration = entityDuration;
    this._data = data;
  }

  get id() {
    return this._id;
  }
  
  get trackId() {
    return this._trackId;
  }
  set trackId(input){
    this._trackId = input;
  }
  
  get finished() {
    return this._finished;
  }
  set finished(input){
    this._finished = input;
  }
  
  get assigned() {
    return this._assigned;
  }
  set assigned(input){
    this._assigned = input;
  }
  
  get epilogId() {
    return this._epilogId;
  }
  set epilogId(input){
    this._epilogId = input;
  }
  
  get epilogFinished() {
    return this._epilogFinished;
  }
  set epilogFinished(input){
    this._epilogFinished = input;
  }
  
  get entityName() {
    return this._entityName;
  }
  set entityName(input){
    this._entityName = input;
  }
  
  get entityDuration() {
    return this._entityDuration;
  }
  set entityDuration(input){
    this._entityDuration = input;
  }
  
  get data() {
    return this._data;
  }
  set data(input){
    this._data = input;
  }
}