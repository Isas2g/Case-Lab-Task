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
    const tracks = store.getTracks();
    const role = localStorage.getItem("role");
    return(
        <div className={style.trackListContainer}>  
            <img src={image} className={style.trackImage}/>
            <div>
                <div className={"container d-flex align-items-center " + style.titleContainer}>
                    <h3 className={"d-flex p-3 " + style.trackTitle}>{my ? "Мои треки" : "Каталог треков"}</h3>
                    {role === "teacher" ? <NewTrack /> : ""}
                </div>
                <TrackList my={my} />
            </div>
        </div>

    )
}

export default TrackListComponent;
