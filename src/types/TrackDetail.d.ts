interface TrackDetail {
  id: integer;
  trackId: integer;
  finished: boolean;
  assigned: boolean;
  epilogId: integer;
  epilogFinished: boolean;
  entityName: string;
  entityDuration: string;
  data: TrackDetailData;
}

interface TrackDetailData {
  type: "course" | "event" | "entry_test" | "pdf";
  entityId: integer;
  sortIndex: integer;
  required: boolean;
}

interface TrackDetailEpilog {
  id: integer;
  detailId: integer;
  finished: boolean;
  data: TrackDetailEpilogData;
}

interface TrackDetailEpilogData {
  content: string;
}
