interface Track {
  id: integer
  status: Status
  assigned: boolean
  data: TrackData
}

type Status = 'not_started' | 'processed' | 'finished'

interface TrackData {
  name: string
  previewText: string
  previewPicture: string
  published: boolean
  dateTimeStart: number
  dateTimeFinish: number
  mode: 'free' | 'consistent'
}
