import styled from "styled-components";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { observer } from "mobx-react-lite";
import store from "../../TrackAssign/store";
import DetailStore from "../../../../TrackDetails/store";
import { ModalComponent } from "../../../../../shared/components/Modal";
import UserForm from "../../TrackAssign/subcomponents/UserForm";
import { UserList } from "../../../../Search/Users";
import { dateFromUnix } from "../../../../../shared/utils/timestampToHumanFormat";
import "./style.module.scss";

const Spoiler = styled.div`
  border: 1px solid #e0e0e0;
  padding: 0 1em;
`;

const Summary = styled.summary`
  font-size: 2vw;
  font-family: "Roboto", sans-serif;
  border-top: none !important;

  &.details[open] div {
    animation: spoiler 1s;
  }

  @keyframes Spoiler {
    0 % {
      max-height: 0;
    }
    100 % {
      max-height: 10em;
    }
  }
`;

const Details = styled.details`
  padding: 1em 0;

  &.details[open] div {
    animation: spoiler 1s;
  }
`;

const Li = styled.li`
  list-style-type: none;
`;

const H2 = styled.h2`
  font-weight: bold;
  text-align: left;
  vertical-align: middle;
  font-size: 3.2vw;
  padding-top: 30px;
  padding-bottom: 30px;
  height: 150px;
  width: 100%;
`;

export const EditButton = styled.button`
  /* background-color: darkorange; */
  border: 1px solid black;
  border-radius: 10px;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 20px;
`;

export const StudentBtn = styled.button`
  /* background-color: darkorange; */
  border: 1px solid black;
  border-radius: 10px;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 20px;
`;

const UlContentTrack = styled.ul`
  font-size: 22px;
  padding-left: 0;
  z-index: 99999;
  text-shadow: 1px 0 1px #000, 0 1px 1px #000, -1px 0 1px #000, 0 -1px 1px #000;
`;

export const StateList = observer((props: any) => {
  const date1 = dateFromUnix(props.track.data.dateTimeStart);
  const date2 = dateFromUnix(props.track.data.dateTimeFinish);
  const duration = DetailStore.details.reduce((a, b) => {
    let arrayA = a.split(" ?? ");
    let arrayB = b.entityDuration.split(" ?? ");
    const hoursA = parseInt(arrayA[0]) || 0;
    const hoursB = parseInt(arrayB[0]) || 0;
    let hours = hoursA + hoursB;
    if (arrayA[1]) arrayA = arrayA[1].split(" ??????");
    else arrayA = [""];
    if (arrayB[1]) arrayB = arrayB[1].split(" ??????");
    else arrayB = [""];
    const minutesA = parseInt(arrayA[0]) || 0;
    const minutesB = parseInt(arrayB[0]) || 0;
    let minutes = minutesA + minutesB;
    if (minutes > 59) {
      minutes -= 60;
      hours += 1;
    }
    return `${hours} ?? ${minutes} ??????`;
  }, "");
  return (
    <UlContentTrack className={"contrast"} style={{ zIndex: 9999 }}>
      <Li key={"name"}>
        <H2>{props.track.data.name}</H2>
        <br />
        <div>???????????? ??????????: {date1}</div>
        <div>?????????? ??????????: {date2}</div>
        <div>?????????????????????????????????? ??????????: {duration}</div>
      </Li>
      <br />
      <Spoiler>
        <Details>
          <Summary>????????????????</Summary>
          <div>{props.track.data.previewText}</div>
        </Details>
      </Spoiler>
      <br />
      <Li key={"published"}>??????????????????????? - {props.track.data.published ? "????" : "??????"}</Li>
      <Li key={"mode"}>?????????? - {props.track.data.mode === "consistent" ? "????????????????????????????????" : "??????????????????"}</Li>
      <br />
    </UlContentTrack>
  );
});

export const Edit = (props: any) => {
  const history = useHistory();

  const moveToUpdate = () => {
    history.push(`/tracks/edit/${props.track.id}`);
  };

  return (
    <EditButton className="btn fourth" onClick={moveToUpdate}>
      {" "}
      ???????????????? ????????{" "}
    </EditButton>
  );
};

//TODO StudentButton, duration, image

interface StudentProps {
  trackId: number;
}

export const Student = observer(({ trackId }: StudentProps): JSX.Element => {
  store.readTrackAssigns(trackId).then();

  const [show, setModalShow] = useState(false);

  return (
    <>
      <StudentBtn className="btn fourth" onClick={() => setModalShow(true)}>
        {" "}
        ?????????????? ??????????{" "}
      </StudentBtn>

      <ModalComponent
        show={show}
        onHide={() => setModalShow(false)}
        heading=""
        title="?????????????? ??????????"
        remove={false}
        track={undefined}
      >
        <h4>???????????? ??????????????????:</h4>
        <UserForm />
        <UserList trackId={trackId} />
      </ModalComponent>
    </>
  );
});
