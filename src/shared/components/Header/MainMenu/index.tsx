import React from 'react';
import 'bootstrap/dist/js/bootstrap.bundle';
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import logo from "../../../assets/banner-white.png"
import {UserCard} from "./subcomponents/UserCard";
import {Bell} from "./subcomponents/Bell";
import {IndexLinkContainer} from "react-router-bootstrap";
import { Link } from 'react-router-dom';
import { BsChevronDown } from "react-icons/bs";
import "./style/style.scss"

type TokenFunc = (str: string) => void;

interface Props {
    token: string;
    setToken: TokenFunc;
}

export const MainMenu:React.FC<Props> = ({token, setToken}) => {
    const role = localStorage.getItem('role');
    return (
        <Navbar expand="lg" sticky="top">
            <Container>
                <Navbar.Brand><Link to="/"><img src={logo} alt="Logo" height="50"/></Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {role != "teacher"
                            ?   <NavDropdown
                                    title={<span className={"text-light"}>Треки <BsChevronDown/></span>}
                                    id="basic-nav-dropdown">
                                <IndexLinkContainer to={'/tracks'}>
                                        <NavDropdown.Item>Каталог</NavDropdown.Item>
                                    </IndexLinkContainer>
                                    <IndexLinkContainer to={'/tracks/my'}>
                                        <NavDropdown.Item>Мои треки</NavDropdown.Item>
                                    </IndexLinkContainer>
                                </NavDropdown>
                            :   <IndexLinkContainer to={'/tracks'}>
                                    <Nav.Link className={"text-light"}>
                                        Каталог треков
                                    </Nav.Link>
                                </IndexLinkContainer>
                        }
                    </Nav>
                    <div className="d-flex align-items-center userCardBell">
                        <UserCard token={token} setToken={setToken} />
                        <Bell />
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
};


