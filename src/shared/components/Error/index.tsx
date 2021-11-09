import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <Container>
      <h1>Ошибка 404: страница не найдена</h1>
      <Link to={"/"}>На главную</Link>
    </Container>
  );
};

export default Error;
