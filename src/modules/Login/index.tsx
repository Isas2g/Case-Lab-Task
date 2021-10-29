import React from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import { useHistory } from "react-router";


interface Props {
  token: string;
  setToken: TokenFunc; 
}

type TokenFunc = (str: string) => void;

export const Login: React.FC<Props> = ({token, setToken}) => {
  
  const history = useHistory();
  
  const student = () => {
    localStorage.setItem("token", "00k488okc8c804ocw8w80s4c0kg8g4ow04ssgk4k");
    localStorage.setItem("role", "student");
    setToken('00k488okc8c804ocw8w80s4c0kg8g4ow04ssgk4k');
    history.push('/');
    // history.goBack();
  };

  const teacher = () => {
    localStorage.setItem("token", "ks8w8wow40sw8sw0o4wwo0c40s4000wgo8gg4os4");
    localStorage.setItem("role", "teacher");
    setToken('ks8w8wow40sw8sw0o4wwo0c40s4000wgo8gg4os4');
    history.push('/');
    // history.goBack();
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