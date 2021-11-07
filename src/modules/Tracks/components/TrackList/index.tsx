import store from "../../store"
import React from "react";
import {TrackList} from "./style"
import {NewTrack} from "./style/NewTrackButton";
import image from "../../assests/Katalog3.jpg";
import style from "./style/style.module.scss";

interface Props {
    my: boolean;
}

const TrackListComponent:React.FC<Props> = ({my}) => {
    store.getTracks().then();
    const role = localStorage.getItem("role");
    return(
        <div className={style.trackListContainer}>
            <div className="w-100">
                <div className={"container d-flex align-items-center " + style.titleContainer}>
                    <h3 className={"d-flex p-3 " + style.trackTitle}>{my ? "Мои треки" : "Каталог треков"}</h3>
                    {role === "teacher" && !my  ? <NewTrack /> : ""}
                </div>
                <TrackList my={my} />
            </div>
        </div>

    )
}

export default TrackListComponent;
