import { FormEvent } from "react";
import store from "../../store";
import { useHistory } from "react-router-dom";
import { observer } from "mobx-react-lite";
import styled from "styled-components";
import { inputDate } from "../../../../shared/utils/timestampToInputFormat";
import { handleInputs } from "../../../../shared/utils/handleInputsUpdate&Create";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

export const Div = styled.div`
  width: 70%;
`;

const EditTrack = observer(() => {
  const history = useHistory();
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    store.updateTrack(store.track);
    history.push(`/tracks/${store.track.id}`);
  };
  return (
    <Div className={"container align-center"}>
      <h4>Настройки трека</h4>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Название</Form.Label>
          <Form.Control required name="name" type="text" onChange={handleInputs} value={store.track.data.name} />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>Описание</Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            required
            name="previewText"
            onChange={handleInputs}
            value={store.track.data.previewText}
          />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>Обложка трека</Form.Label>
          <Form.Control name="previewPicture" type="file" onChange={handleInputs} />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>Дата начала</Form.Label>
          <input
            required
            className="form-control"
            name="dateTimeStart"
            type="datetime-local"
            onChange={handleInputs}
            value={inputDate(store.track.data.dateTimeStart)}
          />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>Дата окончания</Form.Label>
          <input
            required
            className="form-control"
            name="dateTimeFinish"
            type="datetime-local"
            onChange={handleInputs}
            value={inputDate(store.track.data.dateTimeFinish)}
          />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>Последовательность прохождения трека</Form.Label>
          <Form.Select name="mode" onChange={handleInputs} value={store.track.data.mode}>
            <option value="free">свободный</option>
            <option value="consistent">последовательный</option>
          </Form.Select>
          <Form.Text className="text-muted">
            Чтобы элементы трека были доступны студентам для прохождения в обязательном последовательном порядке,
            выберите режим «последовательный».
          </Form.Text>
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>Опубликовать &nbsp;</Form.Label>
          <Form.Switch name="published" checked={store.track.data.published} onChange={handleInputs} />
          <Form.Text className="text-muted">
            Опубликованный трек станет доступен в каталоге. Если Вы хотите продолжить редактирование курса, не ставьте
            галочку.
          </Form.Text>
        </Form.Group>
        <br />
        <Button variant={"outline"} type="submit" className={"btn fourth"}>
          Отправить
        </Button>
      </Form>
    </Div>
  );
});

const UpdateTrack = (props: any) => {
  store.getTrack(props.match.params.id).then();
  return <EditTrack />;
};

export default UpdateTrack;
