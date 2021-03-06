import { TrackDetail } from "../TrackDetail";
import store from "../../store";
import { useEffect, useState } from "react";
import { NewTrackDetail } from "../NewTrackDetail";

import style from "./style/index.module.css";

import { SortableContainer, SortableElement, SortableHandle } from "react-sortable-hoc";
import { BsArrowsMove } from "react-icons/bs";

interface TrackDetailListProps {
  trackId: number;
}

interface TrackDetailSortable {
  mutated: number;
  setMutated: (num: number) => void;
  trackDetail: TrackDetail;
  className: string;
}

interface TrackSortEnd {
  oldIndex: number;
  newIndex: number;
}

type Children = JSX.ElementChildrenAttribute;

const SortableContainerJSX = SortableContainer(({ children }: Children) => (
  <div className="d-flex justify-content-center align-items-center flex-wrap">{children}</div>
));

//Drag handler
const DragHandle = SortableHandle(() => (
  <div
    style={{
      display: "block",
      position: "absolute",
      height: "30px",
      width: "30px",
      color: "white",
      cursor: "grab",
      bottom: 30,
      left: 30,
    }}
  >
    <BsArrowsMove size={30} />
  </div>
));

//Draggable elements
const SortableItem = SortableElement(({ mutated, setMutated, trackDetail, className }: TrackDetailSortable) => (
  <div style={{ position: "relative" }}>
    <TrackDetail key={trackDetail.id} mutated={mutated} setMutated={setMutated} trackDetail={trackDetail} />
    {localStorage.getItem("role") === "teacher" && trackDetail.data.type !== "entry_test" ? <DragHandle /> : ""}
    <div className={className} />
  </div>
));

export const TrackDetailList = ({ trackId }: TrackDetailListProps): JSX.Element => {
  const [trackDetails, setTrackDetails]: any = useState([]);
  const [mutated, setMutated] = useState(0);
  const role = localStorage.getItem("role");

  useEffect(() => {
    const fetchData = async () => {
      setTrackDetails(
        (await store.getTrackDetails(trackId)).sort(
          (a: TrackDetail, b: TrackDetail) => a.data.sortIndex - b.data.sortIndex,
        ),
      );
    };
    fetchData().then();
  }, [mutated, trackId]);
  const sortEnd = async ({ oldIndex, newIndex }: TrackSortEnd) => {
    await store.updateTrackDetail(
      {
        ...trackDetails[oldIndex].data,
        sortIndex: newIndex,
      },
      trackDetails[oldIndex].id,
    );
    await store.updateTrackDetail(
      {
        ...trackDetails[newIndex].data,
        sortIndex: oldIndex,
      },
      trackDetails[newIndex].id,
    );
    setMutated(mutated + 1);
  };

  const conditionToBlockTrackDetail =
    trackDetails.filter((trackDetail: TrackDetail) => trackDetail.data.type === "entry_test").length !== 0 &&
    role === "student";

  return (
    <div className="container">
      <div className="container d-flex align-items-center justify-content-between">
        <h3 className={"d-flex p-3"}>???????????????? ??????????</h3>
        {role === "teacher" ? (
          <NewTrackDetail lastIndex={trackDetails.length} mutated={mutated} setMutated={setMutated} trackId={trackId} />
        ) : (
          ""
        )}
      </div>
      <SortableContainerJSX useDragHandle={true} axis="xy" onSortEnd={sortEnd}>
        {trackDetails
          ? trackDetails.map((trackDetail: TrackDetail, index: number) => (
              <SortableItem
                className={trackDetail.data.type !== "entry_test" && conditionToBlockTrackDetail ? style.shadow : "no"}
                collection={trackDetail.data.type === "entry_test" ? 0 : 1}
                disabled={trackDetail.data.type === "entry_test"}
                index={index}
                key={trackDetail.id}
                mutated={mutated}
                setMutated={setMutated}
                trackDetail={trackDetail}
              />
            ))
          : "..."}
      </SortableContainerJSX>
    </div>
  );
};
