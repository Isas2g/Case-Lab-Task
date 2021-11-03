import { useState } from "react"
import {Form, Col, Row, Button, ToggleButton} from "react-bootstrap";
import { ModalComponent } from "../../../../shared/components/Modal";
import { UserList } from "../../../Search/Users";
import {observer} from "mobx-react-lite";
import store from "../../../Search/Users/store";

interface Props {
  trackId: number;
}

export const TrackAssign = observer(({trackId}:Props): JSX.Element => {
  
  const [show, setModalShow] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [printUsers, setPrintUsers] = useState('');
  const [department, setDepartment] = useState('');
  const [company, setCompany] = useState('');
  const [toggleButton, setToggleButton] = useState(true);

  const handleForm = (button:any) => {
      setPrintUsers(searchQuery);
      setToggleButton(false);
      store.getUsersBySearch(searchQuery).then(() => setToggleButton(true));
  }
  
  return (
    <div>
      <Button onClick={() => setModalShow(true)}>Назначить учеников</Button>
      
        <ModalComponent show={show} onHide={() => setModalShow(false)} heading="Ученики трека" title="" remove={false} track={undefined}>
          <h4>Список студентов:</h4>
          {/*<StudentList trackId={trackId}/>*/}
          <Form>
            <Row>
              <Col md>
                <Form.Group controlId="fullnameNLogin">
                  <Form.Label>Имя пользователя:</Form.Label>
                    <Form.Control type={"text"} placeholder={"Введите имя пользователя"} onChange={(event) => setSearchQuery(event.target.value)}/>
                    <Form.Text className="text-muted">
                      логин пользователя тоже подойдёт
                    </Form.Text>
                </Form.Group>
              </Col>
              <Col md>
                <Form.Group controlId="department">
                  <Form.Label>Департамент:</Form.Label>
                  <Form.Control as="select" onChange={(event) => setDepartment(event.target.value)}>
                    <option></option>
                    {/*<Departments />*/}
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col md>
                <Form.Group controlId="department">
                  <Form.Label>Компания:</Form.Label>
                  <Form.Control as="select" onChange={(event) => setCompany(event.target.value)}>
                    <option></option>
                    {/*<Companies dep={department} />*/}
                  </Form.Control>
                </Form.Group>
              </Col>
            </Row>
            <Button variant={"warning"} className={toggleButton ? 'float-end' : 'float-end disabled'} onClick={handleForm}>
              Поиск
            </Button>
          </Form>
          <br />
          <br />
          <UserList trackId={trackId} />
        </ModalComponent>
    </div>
  )
})