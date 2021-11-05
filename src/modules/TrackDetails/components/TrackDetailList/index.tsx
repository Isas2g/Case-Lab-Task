import { TrackDetail } from '../TrackDetail'
import store from '../../store'
import { useEffect, useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import { NewTrackDetail } from '../NewTrackDetail'
import styled from 'styled-components'

interface TrackDetailListProps {
  trackId: number
}

export const TrackDetailList = ({
  trackId,
}: TrackDetailListProps): JSX.Element => {
  const [trackDetails, setTrackDetails]: any = useState([])
  const [mutated, setMutated] = useState(0)
  const role = localStorage.getItem('role')
  const details = store.details

  useEffect(() => {
    const fetchData = async () => {
      setTrackDetails(
        (await store.getTrackDetails(trackId)).sort(
          (a: TrackDetail, b: TrackDetail) =>
            a.data.sortIndex - b.data.sortIndex,
        ),
      )
    }
    fetchData()
  }, [mutated])

  const finishedCount = trackDetails.filter(
    (trackDetail: TrackDetail) => trackDetail.finished,
  ).length

  const progressValue = (finishedCount / trackDetails.length) * 100

  const Progress = styled.div`
    border: 1px solid black;
    border-radius: 10px;
    color: black;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    background: rgb(250, 5, 15);
    background: linear-gradient(
      90deg,
      rgba(250, 5, 15, 1) 0%,
      rgba(250, 242, 20, 1) 50%,
      rgba(96, 255, 0, 1) 100%
    );
    background-position: 25%;
  `

  return (
    <div className="container">
      {role === 'student' ? (
        <Progress className="row">Прогресс трека: {progressValue}%</Progress>
      ) : (
        ''
      )}
      <div className="container d-flex align-items-center">
        <h3 className={'d-flex p-3'}>Элементы трека</h3>
        {role === 'teacher' ? (
          <NewTrackDetail
            lastIndex={trackDetails.length}
            mutated={mutated}
            setMutated={setMutated}
            trackId={trackId}
          />
        ) : (
          ''
        )}
      </div>
      <div className="d-flex justify-content-center align-items-center flex-wrap">
        {trackDetails
          ? trackDetails.map((trackDetail: TrackDetail) => (
              <TrackDetail
                key={trackDetail.id}
                mutated={mutated}
                setMutated={setMutated}
                trackDetail={trackDetail}
              />
            ))
          : '...'}
      </div>
    </div>
  )
}
