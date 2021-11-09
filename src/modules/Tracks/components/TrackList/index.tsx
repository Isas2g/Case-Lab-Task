import store from "../../store";
import React from "react";
import { TrackList } from "./style";
import { Button } from "react-bootstrap";
import { IndexLinkContainer } from "react-router-bootstrap";
import "src/shared/styles/style.scss";
import { DIV, H2 } from "src/shared/styles/style";

interface Props {
  my: boolean;
}

export const CreateTrack: React.FC = () => {
  return (
    <IndexLinkContainer to={"/tracks/new"}>
      <Button variant={"outline"} className={"btn fourth"}>
        Создать трек
      </Button>
    </IndexLinkContainer>
  );
};

const TrackListComponent: React.FC<Props> = ({ my }) => {
  store.getTracks().then();
  const role = localStorage.getItem("role");
  return (
    <>
      <DIV className={"d-flex align-items-center justify-content-between"}>
        <H2>{my ? "Мои треки" : "Каталог треков"}</H2>
        <div>{role === "teacher" ? <CreateTrack /> : ""}</div>
      </DIV>
      <TrackList my={my} />
    </>
  );
};

export default TrackListComponent;
