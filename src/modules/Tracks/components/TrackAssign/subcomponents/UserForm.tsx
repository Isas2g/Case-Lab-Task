import { Button, Col, Form, Row } from "react-bootstrap";
import { useState } from "react";
import { CircleFadeLoader } from "react-loaders-kit";
import store from "../../../../Search/Users/store";
import Departments from "./Departments";
import Companies from "./Companies";

const UserForm = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [department, setDepartment] = useState("");
  const [company, setCompany] = useState("");
  const [toggleButton, setToggleButton] = useState(true);

  store.getDepartments().then();
  if (department !== "") store.getCompanies(department).then();

  const handleForm = () => {
    setToggleButton(false);
    store.getUsersBySearch(searchQuery, department, company).then(() => {
      setToggleButton(true);
    });
  };

  return (
    <div>
      <Form className={"clearfix pb-3"}>
        <Row>
          <Col md>
            <Form.Group controlId="fullnameNLogin">
              <Form.Label>Поиск пользователя:</Form.Label>
              <Form.Control
                type={"text"}
                placeholder={"Введите имя пользователя"}
                onChange={(event) => setSearchQuery(event.target.value)}
              />
              <Form.Text className="text-muted">поиск по ФИО или логину</Form.Text>
            </Form.Group>
          </Col>
          <Col md>
            <Form.Group controlId="department">
              <Form.Label>Дивизион:</Form.Label>
              <Form.Control as="select" value={department} onChange={(event) => setDepartment(event.target.value)}>
                <option />
                <Departments />
              </Form.Control>
            </Form.Group>
          </Col>
          <Col md>
            <Form.Group controlId="department">
              <Form.Label>Предприятие:</Form.Label>
              <Form.Control
                as="select"
                onChange={(event) => setCompany(event.target.value)}
                disabled={department ? false : true}
                value={!department ? "" : company}
              >
                <option />
                <Companies />
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>
        <Button variant={"warning"} className={toggleButton ? "float-end" : "float-end disabled"} onClick={handleForm}>
          Поиск
        </Button>
        <Button variant={"secondary"} className="float-end" onClick={() => setDepartment("")}>
          Сбросить фильтры
        </Button>
      </Form>
      <CircleFadeLoader loading={!toggleButton} />
    </div>
  );
};

export default UserForm;
