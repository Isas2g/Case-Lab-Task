import React from "react";
import { Button, ButtonGroup } from "react-bootstrap";


const Login: React.FC = (props) => {
  
  const student = () => {
    localStorage.setItem("token", "00k488okc8c804ocw8w80s4c0kg8g4ow04ssgk4k");
    window.location.reload();
  };

  const teacher = () => {
    localStorage.setItem("token", "ks8w8wow40sw8sw0o4wwo0c40s4000wgo8gg4os4");
    window.location.reload();
  };
  
  return (
    <>
      <ButtonGroup className="gap-3" size="lg">
        <Button variant={"success"} onClick={student}> Log In As Student </Button>
        <Button variant={"primary"} onClick={teacher}> Log In As Teacher </Button>
      </ButtonGroup>
    </>
  );
}

export default Login;