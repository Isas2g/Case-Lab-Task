import React from "react";
import { loginTeacher, loginStudent } from "../../actions/auth";
import { Button, ButtonGroup } from "react-bootstrap";

interface Props {
  
}

export const Login: React.FC<Props> = (props) => {
  
  const student = () => {
    const { dispatch, history } = props;
    //localStorage.setItem("token", "00k488okc8c804ocw8w80s4c0kg8g4ow04ssgk4k");
    dispatch(loginStudent());
  };

  const teacher = () => {
    const { dispatch, history } = props;
    //localStorage.setItem("token", "ks8w8wow40sw8sw0o4wwo0c40s4000wgo8gg4os4");
    dispatch(loginTeacher());
  };
  
  return (
    <>
      <ButtonGroup className="gap-3" size="lg">
        <Button href="/" variant={"success"} onClick={this.student}> Log In As Student </Button>
        <Button href="/" variant={"primary"} onClick={this.teacher}> Log In As Teacher </Button>
      </ButtonGroup>
    </>
  );
}