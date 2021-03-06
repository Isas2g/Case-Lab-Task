import store from "../../store";
import { useState } from "react";
import { Student, StateList, Edit } from "./style";
import { observer } from "mobx-react-lite";
import { TrackDetailList } from "../../../TrackDetails/components/TrackDetailList";
import { Button, ButtonGroup } from "react-bootstrap";
import styled from "styled-components";
import "./style/style.module.scss";
import { SuccessModal } from "./subcomponents/SuccessModal";

const Back = styled.div`
  background-color: #2c3034;
  padding: 45px;
  position: relative;
  width: 100%;
  border-radius: 25px;
`;

const Progress = styled.div`
  border: 1px solid black;
  border-radius: 10px;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  background: rgb(45, 44, 45);
  background: linear-gradient(90deg, rgb(59, 56, 56) 0%, rgb(68, 68, 66) 50%, rgb(67, 70, 67) 100%);
  background-position: 25%;
`;

const State = observer(() => <StateList track={store.track} />);

const EditButton = observer(() => <Edit track={store.track} />);

const GetTrack = (props: any) => {
  const [trackDetails] = useState([]);
  const [isSuccess, setIsSuccess] = useState(false);
  const finishedCount = trackDetails.filter((trackDetail: TrackDetail) => trackDetail.finished).length;
  const progressValue = (finishedCount / trackDetails.length) * 100 || 0;
  const [previewPic, setPreviewPic] = useState("");
  store.getTrack(props.match.params.id).then(() => setPreviewPic(store.track.data.previewPicture));
  const role = localStorage.getItem("role");
  return (
    <>
      <div
        style={{
          backgroundImage: `url('https://tml10.rosatom.ru/${previewPic}')`,
          borderRadius: "25px",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Back style={{ backgroundColor: "rgba(0, 0, 0, 0.65)" }} className={"container contrast clearfix"}>
          <div style={{ opacity: 1, zIndex: 100 }} className={"clearfix d-inline-block"}>
            <State />
            {role === `teacher` ? (
              <ButtonGroup>
                <EditButton />
                <Student trackId={props.match.params.id} />
              </ButtonGroup>
            ) : (
              ""
            )}
            {role === "student" ? (
              <Progress className="row float-end mt-auto">???????????????? ??????????: {progressValue}%</Progress>
            ) : (
              ""
            )}
          </div>

          {/* <BackImage style={{backgroundImage: `url('https://tml10.rosatom.ru/${previewPic}')`,}} /> */}
        </Back>
      </div>
      <TrackDetailList trackId={props.match.params.id} />

      <Button variant={"outline"} className={"btn fourth"} onClick={() => setIsSuccess(true)}>
        ???????????? ????????
      </Button>

      <SuccessModal data={store.track.data} show={isSuccess} onHide={() => setIsSuccess(false)} />
    </>
  );
};

export default GetTrack;
