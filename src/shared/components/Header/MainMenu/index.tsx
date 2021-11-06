import React from 'react';
import 'bootstrap/dist/js/bootstrap.bundle';
import {Button, Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import logo from "../../../assets/logo.png"
import {UserCard} from "./subcomponents/UserCard";
import {Bell} from "./subcomponents/Bell";
import {IndexLinkContainer} from "react-router-bootstrap";
import {Link, useHistory} from 'react-router-dom';
import { BsChevronDown } from "react-icons/bs";
import "./style/style.css"
import {NewTrack} from "../../../../modules/Tracks/components/TrackList/style/NewTrackButton";
import style from "../../../../modules/Tracks/components/TrackList/style/style.module.scss";
import styled from "styled-components";

type TokenFunc = (str: string) => void;

interface Props {
    token: string;
    setToken: TokenFunc;
}

export const CreateTrack: React.FC = () => {
    const history = useHistory();
    const moveToNew = () => {
        history.push('/tracks/new');
    }
    return(
        <Button className={style.addTrackButton} variant="light" onClick={moveToNew}><b> Создать трек </b></Button>
    )
}

 const Div = styled.div`
   width: 200px;
   border-radius: 0 0 10px;
   
 }
 `

export const MainMenu:React.FC<Props> = ({token, setToken}) => {
    const role = localStorage.getItem("role");
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
                    <Div>{role === "teacher" ? <CreateTrack></CreateTrack> : ""}</Div>
                    <div className="d-flex align-items-center userCardBell">
                        <UserCard token={token} setToken={setToken} />
                        <Bell />
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
};


