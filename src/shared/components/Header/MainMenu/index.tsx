import React from 'react';
import 'bootstrap/dist/js/bootstrap.bundle';
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import logo from "../../../assets/logo.png"
import {UserCard} from "./subcomponents/UserCard";
import {Bell} from "./subcomponents/Bell";
import {IndexLinkContainer} from "react-router-bootstrap";
import { Link } from 'react-router-dom';
import { BsChevronDown } from "react-icons/bs";
import "./style/style.css"

type TokenFunc = (str: string) => void;

interface Props {
    token: string;
    setToken: TokenFunc;
}


export const MainMenu:React.FC<Props> = ({token, setToken}) => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" sticky="top"className="p-0 navbarShadow">
            <Container className={"containerNavbar"}>
                <Navbar.Brand><Link to="/"><img src={logo} alt="Logo" height="50"/></Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav"  className="navbarCollapse" >
                    <Nav className="me-auto navWrapper">
                    <div className="itemNav">
                        <IndexLinkContainer to={'/'}>
                                <Nav.Link>Главная</Nav.Link>
                        </IndexLinkContainer>
                    </div>
                        <div className="itemNav">
                            <NavDropdown className="withoutHover p-0" menuVariant="dark" title={<span className="withoutHover">Треки <BsChevronDown /></span>} id="basic-nav-dropdown">
                                <div className="shadow py-2 drop">
                                    <IndexLinkContainer className="navDropdownItems" to={'/tracks'}>
                                        <NavDropdown.Item>Каталог</NavDropdown.Item>
                                    </IndexLinkContainer>
                                    <IndexLinkContainer className="navDropdownItems" to={'/tracks/my'}>
                                        <NavDropdown.Item>Мои треки</NavDropdown.Item>
                                    </IndexLinkContainer>
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


