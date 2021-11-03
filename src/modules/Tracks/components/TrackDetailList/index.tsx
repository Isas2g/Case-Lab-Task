import { TrackDetail } from '../TrackDetail';
import store from "../../store";
import { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { NewTrackDetail } from '../NewTrackDetail';

interface Props {
  trackId: number;
}

export const TrackDetailList: React.FC<Props> = ({trackId}) => {
  const [trackDetails, setTrackDetails]:any = useState([]);
  const [mutated, setMutated] = useState(0);
  const role = localStorage.getItem('role');
  const details = store.details;

  useEffect(() => {
    const fetchData = async () => {
      setTrackDetails((await store.getTrackDetails(trackId)));
    };
    fetchData();
  }, [mutated]);
  
  const finishedCount = trackDetails.filter((trackDetail: TrackDetail) => trackDetail.finished === true).length;
  
  const progressValue = (finishedCount / trackDetails.length) * 100;
  
  return (
      <div className="container">
              <p>Прогресс трека:</p>
            <div style={{height: '40px', width: progressValue + '%', background: 'red'}} className="row">
                {progressValue} %
            </div>
              <div className="container d-flex align-items-center">
                  <h3 className={"d-flex p-3"}>Элементы трека</h3>
                  {role === "teacher" ? <NewTrackDetail mutated={mutated} setMutated={setMutated} trackId={trackId} /> : ""}
              </div>
              { trackDetails ? trackDetails.map((trackDetail:TrackDetail) => 
                  <Container fluid className={"p-3"} key={trackDetail.id}>
                      <TrackDetail mutated={mutated} setMutated={setMutated} trackDetail={trackDetail} />
                  </Container>
                  )
                : '...'}
      </div>
  )
}