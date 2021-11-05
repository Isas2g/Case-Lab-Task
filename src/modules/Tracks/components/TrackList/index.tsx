import store from '../../store'
import React from 'react'
import { TrackList } from './style'
import { NewTrack } from './style/NewTrackButton'

interface Props {
  my: boolean
}

const TrackListComponent: React.FC<Props> = ({ my }) => {
  const tracks = store.getTracks()
  const role = localStorage.getItem('role')
  return (
    <div className="container">
      <div className="container d-flex align-items-center">
        <h3 className={'d-flex p-3'}>{my ? 'Мои треки' : 'Каталог треков'}</h3>
        {role === 'teacher' && !my ? <NewTrack /> : ''}
      </div>
      <TrackList my={my} />
    </div>
  )
}

export default TrackListComponent
