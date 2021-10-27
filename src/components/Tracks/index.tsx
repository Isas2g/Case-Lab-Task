import React from "react";

interface Props {
  tracks: Track[];
}

export const Tracks: React.FC<Props> = ({tracks}) => {
  
  // TODO: getAllTracks
  
  return (
    <div>
        <h4>Track List</h4>
        {<ul className="list-group">
            {tracks &&
            tracks.map((track, index) => (
                <li
                    className={"list-group-item "}
                    key={index}
                >
                    {track.data.name ? track.data.name : "[Empty]"}
                </li>
            ))}
        </ul>}
    </div>
  );
}