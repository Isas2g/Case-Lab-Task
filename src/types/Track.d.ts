interface Track {
  id: integer;
  status: 'not_started' | 'processed' | 'finished';
  assigned: boolean;
  data: TrackData; 
}

type Status = 'not_started' | 'processed' | 'finished';

interface TrackData {
  name: string;
  previewText: string;
  previewPicture: string;
  published: boolean;
  dateTimeStart: number;
  dateTimeFinish: number;
  mode: 'free' | 'consistent';
}

type GetAllTracks = () => void;

type GetTrack = (trackId: integer) => void;

type CreateTrack = (trackData: TrackData) => void;

type UpdateTrack = (track: Track) => void;

type DeleteTrack = (track: Track) => void;