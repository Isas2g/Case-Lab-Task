import {Button, Col, Form, Row} from "react-bootstrap";
import {useState} from "react";
import store from "../../../../Search/Users/store";
import Departments from "./Departments";
import Companies from "./Companies";

const UserForm = () => {

    const [searchQuery, setSearchQuery] = useState('');
    const [department, setDepartment] = useState('');
    const [company, setCompany] = useState('');
    const [toggleButton, setToggleButton] = useState(true);

    store.getDepartments().then();
    if (department != '') store.getCompanies(department).then();

    const handleForm = (button:any) => {
        setToggleButton(false);
        store.getUsersBySearch(searchQuery, department, company).then(() => setToggleButton(true));
    }

    return (
        <Form className={"clearfix pb-3"}>
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
                            <Departments />
                        </Form.Control>
                    </Form.Group>
                </Col>
                <Col md>
                    <Form.Group controlId="department">
                        <Form.Label>Компания:</Form.Label>
                        <Form.Control as="select" onChange={(event) => setCompany(event.target.value)} disabled={department ? false : true}>
                            <Companies />
                        </Form.Control>
                    </Form.Group>
                </Col>
            </Row>
            <Button variant={"warning"} className={toggleButton ? 'float-end' : 'float-end disabled'} onClick={handleForm}>
                Поиск
            </Button>
        </Form>
    )
}

export default UserForm;