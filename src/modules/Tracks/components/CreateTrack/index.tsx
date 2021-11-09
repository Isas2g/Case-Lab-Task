import React, { FormEvent } from "react";
import store from "../../store";
import { useHistory } from "react-router-dom";
import { handleInputs } from "../../../../shared/utils/handleInputsUpdate&Create";
import { Div } from "../UpdateTrack";
import { Button, Form } from "react-bootstrap";

const CreateTrack: React.FC = () => {
  const history = useHistory();

  store.track.data = {
    name: "[ERROR: EMPTY NAME!]",
    previewText: "string",
    previewPicture: "string",
    published: true,
    dateTimeStart: 0,
    dateTimeFinish: 0,
    mode: "free",
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    store.addTrack(store.track.data).then();
    history.push("/tracks");
  };

  return (
    <Div className={"container align-center"}>
      <h4>Создание трека</h4>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Название</Form.Label>
          <Form.Control required name="name" type="text" onChange={handleInputs} />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>Описание</Form.Label>
          <Form.Control as="textarea" rows={5} required name="previewText" onChange={handleInputs} />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>Обложка трека</Form.Label>
          <Form.Control name="previewPicture" type="file" onChange={handleInputs} />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>Дата начала</Form.Label>
          <input required className="form-control" name="dateTimeStart" type="datetime-local" onChange={handleInputs} />
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
          />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>Последовательность прохождения трека</Form.Label>
          <Form.Select name="mode" onChange={handleInputs}>
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
          <Form.Switch name="published" onChange={handleInputs} />
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
};

export default CreateTrack;
