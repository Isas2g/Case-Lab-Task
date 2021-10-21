import React from 'react';

import {connect} from "react-redux";
import {loginTeacher, loginStudent} from "../../actions/auth";
import {Redirect, Router} from "react-router-dom";

class LogIn extends React.Component {
    constructor(props) {
        super(props);
        this.wrapper = React.createRef();
        this.student.bind(this);
        this.teacher.bind(this);
    }

    student = () => {
        const { dispatch, history } = this.props;
        localStorage.setItem('token', '00k488okc8c804ocw8w80s4c0kg8g4ow04ssgk4k')
        dispatch(loginStudent());
        // return <Router history={history} ><Redirect to="/" /></Router>
    }

    teacher = () => {
        const { dispatch, history } = this.props;
        localStorage.setItem('token', 'ks8w8wow40sw8sw0o4wwo0c40s4000wgo8gg4os4')
        dispatch(loginTeacher());

        // return <Router history={history}><Redirect to="/" /></Router>
    }


    render() {
        return(
            <>
                <ul>
                    <li>
                        <a href="/" onClick={this.student}> Log In As Student </a>
                    </li>
                    <li>
                        <a href="/" onClick={this.teacher}> Log In As Teacher </a>
                    </li>
                </ul>
            </>
        )
    }
}

function mapStateToProps(state) {
    return {
    };
}

export default connect(mapStateToProps)(LogIn);