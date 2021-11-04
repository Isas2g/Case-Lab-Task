import store from "../../../store";
import React from "react";
import {observer} from "mobx-react-lite";
import {Container, Row} from "react-bootstrap";
import {ListItem} from "./ListItem";
import { Col } from "react-bootstrap";
import style from "./style.module.scss"


interface Props {
    my: boolean;
}

export const TrackList: React.FC<Props> = observer( ({my}) => {
    const tracks = my ? store.tracks.filter(item => item.assigned) : store.tracks;
    const toMatrix = (arr:any[], width:number) =>
        arr.reduce((rows, key:Track, index) => (index % width === 0 ? rows.push([key])
            : rows[rows.length-1].push(key)) && rows, []);
    const tracksTable = toMatrix(tracks, 3)
    return(
        <>
        {tracksTable.map((trackRow:Track[], index:number) => (
                <Container fluid className={"p-3 mr-4"}  key={"row"+index}>
                    <Row className={style.rowT}>
                    {trackRow.map((track) => (
                        <ListItem track={track} key={track.id}/>
                    ))}
                    {trackRow.length < 3
                        ? <Col key={"col3"}></Col>
                        : ''
                    }
                    {trackRow.length < 2
                        ? <Col key={"col2"}></Col>
                        : ''
                    }
                    </Row>
                </Container>
            ))}
        </>
    )
})