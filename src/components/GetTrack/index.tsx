import React from "react";

interface Props {
  getTrack: GetTrack;
  track: Track;
}

export const GetTrack: React.FC<Props> = ({getTrack, track}) => {
  
  getTrack(track.id);
  
  return (
    <div>
      <h4>Track {track && track.id}</h4>
      {/*track && track.data.name ? track.data.name : "[Empty]"*/}
    </div>
  );
}