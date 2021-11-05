import React from 'react';
import 'bootstrap/dist/js/bootstrap.bundle';
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import logo from "../../../shared/assets/logo.png"
import {UserCard} from "../../../shared/components/Header/MainMenu/subcomponents/UserCard";
import {Bell} from "../../../shared/components/Header/MainMenu/subcomponents/Bell";
import {useLocation} from "react-router";
import "./style/style.css"

type TokenFunc = (str: string) => void;

interface Props {
    token: string;
    setToken: TokenFunc;
}

export const MainMenu:React.FC<Props> = ({token, setToken}) => {
    return (
        <Navbar bg="light" expand="lg" sticky="top"className="p-0 navbarShadow">
            <Container className={"containerNavbar"}>
                <Navbar.Brand href="/"><img src={logo} alt="Logo" height="50"/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="navbarCollapse" >
                    <Nav className="me-auto navWrapper">
                        <div className="itemNav"><Nav.Link href="/">Главная</Nav.Link></div>
                        <div className="itemNav">
                        <NavDropdown title="Треки" id="basic-nav-dropdown" className="p-0" >
                            <div className="shadow py-2 drop">
                                <NavDropdown.Item className="navDropdownItems" href="/tracks">Каталог</NavDropdown.Item>
                                <NavDropdown.Item className="navDropdownItems" href="/tracks/my">Мои треки</NavDropdown.Item>
                            </div>
                            
                        </NavDropdown>
                        </div>
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


