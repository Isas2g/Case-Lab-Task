import TrackList from "./components/TrackList";
import React from "react";

interface Props {
  my: boolean;
}

const Tracks: React.FC<Props> = ({ my }) => {
  return <TrackList my={my} />;
};

export default Tracks;
