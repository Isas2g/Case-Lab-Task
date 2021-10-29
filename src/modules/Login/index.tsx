import React from "react";
import { Button, ButtonGroup } from "react-bootstrap";

interface Props {
  
}

export const Login: React.FC<Props> = (props) => {
  
  const student = () => {
    localStorage.setItem("token", "00k488okc8c804ocw8w80s4c0kg8g4ow04ssgk4k");
    localStorage.setItem("role", "student");
    window.location.reload();
  };

  const teacher = () => {
    localStorage.setItem("token", "ks8w8wow40sw8sw0o4wwo0c40s4000wgo8gg4os4");
    localStorage.setItem("role", "teacher");
    window.location.reload();
  };
  
  return (
    <>
      <ButtonGroup className="gap-3 d-flex justify-content-center" size="lg">
        <Button className="m-2" variant={"success"} onClick={student}> Log In As Student </Button>
        <Button className="m-2" variant={"primary"} onClick={teacher}> Log In As Teacher </Button>
      </ButtonGroup>
    </>
  );
}