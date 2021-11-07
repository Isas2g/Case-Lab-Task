import { TrackDetail } from '../TrackDetail';
import store from "../../store";
import {  useEffect, useState } from 'react';
import { NewTrackDetail } from '../NewTrackDetail';
import styled from "styled-components";

import {
  SortableContainer,
  SortableElement,
  SortableHandle
} from "react-sortable-hoc";

interface TrackDetailListProps {
  trackId: number;
}

interface TrackDetailSortable {
  mutated: number;
  setMutated: (num: number) => void;
  trackDetail: TrackDetail;
}

interface TrackSortEnd {
  oldIndex: number;
  newIndex: number;
}

type Children = JSX.ElementChildrenAttribute;

const SortableContainerJSX = SortableContainer(({children}: Children) =>
  <div className="d-flex justify-content-center align-items-center flex-wrap">
    {children}
  </div>
);

//Drag handler
const DragHandle = SortableHandle(() => (
  <div style={{display: 'block', position: 'absolute', height: '20px', width: '20px', background: '#fff', cursor: 'grab', top: '20px', left: '20px'}}></div>
));

//Draggable elements
const SortableItem = SortableElement(({mutated, setMutated, trackDetail}: TrackDetailSortable) => (
  <div style={{position: 'relative'}}>
    <TrackDetail key={trackDetail.id} mutated={mutated} setMutated={setMutated} trackDetail={trackDetail} />
    <DragHandle />
  </div>
));

export const TrackDetailList = ({trackId} : TrackDetailListProps): JSX.Element => {
  const [trackDetails, setTrackDetails]:any = useState([]);
  const [mutated, setMutated] = useState(0);
  const role = localStorage.getItem('role');

  useEffect(() => {
    const fetchData = async () => {
      setTrackDetails((await store.getTrackDetails(trackId)).sort((a: TrackDetail, b: TrackDetail) => a.data.sortIndex - b.data.sortIndex));
    };
    fetchData();
  }, [mutated, trackId]);
  const sortEnd = async( {oldIndex, newIndex}: TrackSortEnd ) => {
    await store.updateTrackDetail({
      ...trackDetails[oldIndex].data,
      sortIndex: newIndex
    }, trackDetails[oldIndex].id);
    await store.updateTrackDetail({
      ...trackDetails[newIndex].data,
      sortIndex: oldIndex
    }, trackDetails[newIndex].id);
    setMutated(mutated+1);
  };
  

    const finishedCount = trackDetails.filter((trackDetail: TrackDetail) => trackDetail.finished).length;

    const progressValue = (finishedCount / trackDetails.length) * 100;

    const Progress = styled.div`
  border: 1px solid black;
  border-radius: 10px;
  color: black;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
      background: rgb(250,5,15);
      background: linear-gradient(90deg, rgba(250,5,15,1) 0%, rgba(250,242,20,1) 50%, rgba(96,255,0,1) 100%);
      background-position: 25%;
`



  return (
      <div className="container">
          {role === 'student' ?
            <Progress className="row">
                Прогресс трека: {progressValue}%
            </Progress> : ''}
              <div className="container d-flex align-items-center">
                  <h3 className={"d-flex p-3"}>Элементы трека</h3>
                  {role === "teacher" ? <NewTrackDetail lastIndex={trackDetails.length} mutated={mutated} setMutated={setMutated} trackId={trackId} /> : ""}
              </div>
                <SortableContainerJSX useDragHandle={true} axis="xy" onSortEnd={sortEnd}>
                  { trackDetails ? trackDetails.map((trackDetail:TrackDetail, index: number) =>
                          <SortableItem disabled={trackDetail.data.type === 'entry_test' ? true : false} index={index} key={trackDetail.id} mutated={mutated} setMutated={setMutated} trackDetail={trackDetail} />
                      )
                  : '...'}
                </SortableContainerJSX>
      </div>
  )
}