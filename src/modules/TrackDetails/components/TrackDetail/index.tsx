import styled from "styled-components";
import { useState } from "react";
import { Badge, Button, Card } from "react-bootstrap";
import { IndexLinkContainer } from "react-router-bootstrap";
import style from "./style/index.module.css";
import { DetailDeleteModal } from "../DetailDeleteModal";
import { DetailUpdateModal } from "../DetailUpdateModal";

const Cross = styled.b`
    cursor: pointer;
    position: absolute;
    top: 0.25rem;
    right: 0.5rem;
`;

interface Props {
  trackDetail: TrackDetail;
  mutated: number;
  setMutated: SetMutatedFunc;
}

type SetMutatedFunc = (num: number) => void;

export const TrackDetail: React.FC<Props> = ({trackDetail, setMutated, mutated}) => {
    const role = localStorage.getItem("role");
    const [editModalShow, setEditModalShow] = useState(false);
    const [deleteModalShow, setDeleteModalShow] = useState(false);
    const detailColor = {
        'course': "primary",
        'event': "secondary",
        'entry_test': "danger",
        'pdf': "success",
    }
    const editClick = () => {
        setEditModalShow(true);
    }
    return (
            <Card
                style={
                    {
                        width: "320px",
                        minHeight: '300px',
                        padding: '15px',
                        position: 'relative'
                    }
                }
                className={"bg-dark text-white m-3 " + style['edit-trackDetail']}
                border={detailColor[trackDetail.data.type]}
            >
            {role === "teacher" ? <Cross className="close" onClick={() => setDeleteModalShow(true)}>✖</Cross> : ""}
                <Card.Title >{trackDetail.entityName} <br />
                    {role === "teacher" && trackDetail.data.type !== 'entry_test' ? 
                        <Badge
                            className={style["edit-btn"]}
                            bg="secondary"
                            onClick={editClick}
                        >Изменить</Badge>
                        : 
                        ""}
                </Card.Title>
                <Card.Text>Номер: {trackDetail.id}</Card.Text>
                <Card.Text>Продолжительность: {trackDetail.entityDuration}</Card.Text>
                <Card.Text>Тип: {trackDetail.data.type === 'course' ? 'курс' : ''}
                                {trackDetail.data.type === 'entry_test' ? 'входное тестирование' : ''}
                                {trackDetail.data.type === 'event' ? 'мероприятие' : ''}
                                {trackDetail.data.type === 'pdf' ? 'pdf-файл' : ''}
                </Card.Text>
                <Card.Text>Закончен: {trackDetail.epilogFinished ? 'да' : 'нет'}</Card.Text>
                <Card.Text>Обязателен: {trackDetail.data.required ? 'да' : 'нет'}</Card.Text>

                <Card.Text style={{position: 'absolute', bottom: '15px', right: '15px'}}>
                    <IndexLinkContainer to={'/tracks/trackDetail/' + trackDetail.id}>
                        <Button variant={"outline"} className={"btn fourth"}>Перейти</Button>
                    </IndexLinkContainer>
                </Card.Text>
                
                <DetailDeleteModal 
                    show={deleteModalShow}
                    onHide={() => setDeleteModalShow(false)}
                    title={`Удалить элемент трека ${trackDetail.entityName}?`}
                    trackDetail={trackDetail}
                    mutated={mutated}
                    setMutated={setMutated}
                />
                <DetailUpdateModal 
                    show={editModalShow}
                    onHide={() => setEditModalShow(false)}
                    type={trackDetail.data.type}
                    setMutated={setMutated}
                    mutated={mutated}
                    trackDetail={trackDetail}
                />
            </Card>
    );
}