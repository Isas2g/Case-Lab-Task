import { TrackDetail } from '../TrackDetail';
import store from "../../store";
import { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { NewTrackDetail } from '../NewTrackDetail';

interface TrackDetailListProps {
  trackId: number;
}

export const TrackDetailList = ({trackId} : TrackDetailListProps): JSX.Element => {
  const [trackDetails, setTrackDetails]:any = useState([]);
  const [mutated, setMutated] = useState(0);
  const role = localStorage.getItem('role');
  const details = store.details;

  useEffect(() => {
    const fetchData = async () => {
      setTrackDetails((await store.getTrackDetails(trackId)).sort((a: TrackDetail, b: TrackDetail) => a.data.sortIndex - b.data.sortIndex));
    };
    fetchData();
  }, [mutated]);
  
  const finishedCount = trackDetails.filter((trackDetail: TrackDetail) => trackDetail.finished).length;
  
  const progressValue = (finishedCount / trackDetails.length) * 100;
  
  return (
      <div className="container">
              <p>Прогресс трека:</p>
            <div style={{height: '40px', width: progressValue + '%', background: 'red'}} className="row">
                {progressValue} %
            </div>
              <div className="container d-flex align-items-center">
                  <h3 className={"d-flex p-3"}>Элементы трека</h3>
                  {role === "teacher" ? <NewTrackDetail lastIndex={trackDetails.length} mutated={mutated} setMutated={setMutated} trackId={trackId} /> : ""}
              </div>
              <div className="d-flex justify-content-center align-items-center flex-wrap">
                { trackDetails ? trackDetails.map((trackDetail:TrackDetail) => 
                        <TrackDetail key={trackDetail.id} mutated={mutated} setMutated={setMutated} trackDetail={trackDetail} />
                    )
                  : '...'}
              </div>
      </div>
  )
}