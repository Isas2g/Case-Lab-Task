import React from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import { AuthService } from "./services/authService";

export const Login: React.FC = () => {
  return (
    <ButtonGroup className="gap-3 d-flex justify-content-center" size="lg">
      <Button className={"btn fourth"} variant={"outline"} onClick={AuthService.loginStudent} href={"/"}>
        Войти как ученик
      </Button>
      <Button className={"btn fourth"} variant={"outline"} onClick={AuthService.loginTeacher} href={"/"}>
        Войти как преподаватель
      </Button>
    </ButtonGroup>
  );
};
