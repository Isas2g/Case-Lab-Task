import React from 'react';
import 'bootstrap/dist/js/bootstrap.bundle';
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import logo from "../../../shared/assets/logo.png"
import {UserCard} from "./UserCard";
import {Bell} from "./Bell";
import {useLocation} from "react-router";
import { Link } from 'react-router-dom';
import "./style/style.css"

type TokenFunc = (str: string) => void;

interface Props {
    token: string;
    setToken: TokenFunc;
}

export const MainMenu:React.FC<Props> = ({token, setToken}) => {
    return (
        <Navbar bg="light" expand="lg" sticky="top">
            <Container>
                <Navbar.Brand><Link to="/"><img src={logo} alt="Logo" height="50"/></Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link to="/">Главная</Link>
                        <NavDropdown title="Треки" id="basic-nav-dropdown">
                            <NavDropdown.Item><Link to="/tracks">Каталог</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to="/tracks/my">Мои треки</Link></NavDropdown.Item>
                        </NavDropdown>
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


