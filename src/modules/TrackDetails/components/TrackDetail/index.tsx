import styled from "styled-components";
import { ChangeEvent, useState } from "react";
import { Badge, Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import store from "../../store";
import style from './style/index.module.css';
import { DetailDeleteModal } from "../DetailDeleteModal";

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
    const role = localStorage.getItem('role');
    const [type, setType] = useState(trackDetail.data.type);
    const [editMode, setEditMode] = useState(false);
    const [deleteModalShow, setDeleteModalShow] = useState(false);
    
    const editClick = () => {
        setEditMode(true);
    }
    const editDone = () => {
        store.updateTrackDetail({...trackDetail.data, type}, trackDetail.id);
        setEditMode(false);
        setMutated(mutated + 1);
    }
    // const makeFinished = () => {
    //     store.updateTrackDetail({...trackDetail.data, finished: true}, trackDetail.id);
    //     setEditMode(false);
    //     setMutated(mutated + 1);
    // }
    const editing = (event: ChangeEvent<HTMLSelectElement>) => {
        if (event.target.value === 'course' ||
            event.target.value === 'event' ||
            event.target.value === 'entryTest' ||
            event.target.value === 'pdf'
        ) {
          setType(event.target.value);
        }
    }
    // bg-dark text-white
    return (
        <Col className="m-2 ">
            <Card className={style['detailCard']}>
            {role === "teacher" ? <Cross className="close" onClick={() => setDeleteModalShow(true)}>✖</Cross> : ""}
                <Card.Title className={style['detailTextTitle']}>{trackDetail.entityName}</Card.Title>
                <Card.Text className={style['detailText']}>Номер: {trackDetail.id}</Card.Text>
                <Card.Text className={style['detailText']}>Продолжительность: {trackDetail.entityDuration}</Card.Text>
                <Card.Text className={style['edit-trackDetail']}>Тип: {editMode ?
                    <p>
                    <select onChange={editing} className="form-control" placeholder="Имя элемента">
                        <option value="course">Курс</option>
                        <option value="event">Событие</option>
                        <option value="entryTest">Тест</option>
                        <option value="pdf">PDF документ</option>
                    </select>
                    <Button onClick={editDone}>Готово</Button>
                    </p>  : type}
                    {role === "teacher" ? 
                    <Badge
                        className={style['edit-btn']}
                        bg="secondary"
                        onClick={editClick}
                    >Изменить</Badge> : ""}
                    
                </Card.Text>
                <Card.Text>Закончен: {trackDetail.epilogFinished ? 'да' : 'нет'}</Card.Text>
                <Card.Text>Обязателен: {trackDetail.data.required ? 'да' : 'нет'}</Card.Text>
                
                <DetailDeleteModal 
                    show={deleteModalShow}
                    onHide={() => setDeleteModalShow(false)}
                    title={`Удалить элемент трека ${trackDetail.entityName}?`}
                    trackDetail={trackDetail}
                    mutated={mutated}
                    setMutated={setMutated}
                />
                {/* {role ? <Button onClick={makeFinished}>Завершить элемент</Button> : ''} */}
            </Card>
        </Col>
    );
}