import store from "../../store"
import React from "react";
import {TrackList} from "./style"
import {NewTrack} from "./style/NewTrackButton";
import style from "./style/style.module.scss";

interface Props {
    my: boolean;
}

const TrackListComponent:React.FC<Props> = ({my}) => {
    store.getTracks().then();
    const role = localStorage.getItem("role");
    return(
            <>
                <div className={"d-flex align-items-center "}>
                    <h3 className={"p-3 " + style.trackTitle}>{my ? "Мои треки" : "Каталог треков"}</h3>
                    {/*role === "teacher" && !my  ? <NewTrack /> : ""*/}
                </div>
                <TrackList my={my} />
            </>

    )
}

export default TrackListComponent;
