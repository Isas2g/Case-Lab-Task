import React from "react";

import { connect } from "react-redux";
import { loginTeacher, loginStudent } from "../../actions/auth";
import { Redirect, Router } from "react-router-dom";

import { Button, ButtonGroup } from "react-bootstrap";

class LogIn extends React.Component {
  constructor(props) {
    super(props);
    this.wrapper = React.createRef();
    this.student.bind(this);
    this.teacher.bind(this);
  }

  student = () => {
    const { dispatch, history } = this.props;
    //localStorage.setItem("token", "00k488okc8c804ocw8w80s4c0kg8g4ow04ssgk4k");
    dispatch(loginStudent());
  };

  teacher = () => {
    const { dispatch, history } = this.props;
    //localStorage.setItem("token", "ks8w8wow40sw8sw0o4wwo0c40s4000wgo8gg4os4");
    dispatch(loginTeacher());
  };


  render() {
    return (
      <>
        <ButtonGroup className="gap-3" size="lg">
          <Button href="/" variant={"success"} onClick={this.student}> Log In As Student </Button>
          <Button href="/" variant={"primary"} onClick={this.teacher}> Log In As Teacher </Button>
        </ButtonGroup>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(LogIn);