import {Button, Col, Form, Row} from "react-bootstrap";
import {useState} from "react";
import store from "../../../../Search/Users/store";

const UserForm = () => {

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
    )
}

export default UserForm;