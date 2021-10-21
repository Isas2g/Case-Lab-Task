// noinspection InfiniteRecursionJS
export default class TrackDetail {
  id;
  trackId;
  finished;
  assigned;
  epilogId;
  epilogFinished;
  entityName;
  entityDuration;
  data;
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
  
  get trackId() {
    return this.trackId;
  }
  
  get finished() {
    return this.finished;
  }
  
  get assigned() {
    return this.assigned;
  }
  
  get epilogId() {
    return this.epilogId;
  }
  
  get epilogFinished() {
    return this.epilogFinished;
  }
  
  get entityName() {
    return this.entityName;
  }
  
  get entityDuration() {
    return this.entityDuration;
  }
  
  get data() {
    return this.data;
  }
}