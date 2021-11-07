import React from "react";
import "bootstrap/dist/js/bootstrap.bundle";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import logo from "../../../assets/banner-white.png";
import { UserCard } from "./subcomponents/UserCard";
import { Bell } from "./subcomponents/Bell";
import { IndexLinkContainer } from "react-router-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { BsChevronDown } from "react-icons/bs";
import "./style.scss";
import styled from "styled-components";
import { Button } from "react-bootstrap";

export const UL = styled.ul`
  list-style-type: none;
  display: inline-grid;
  grid-auto-flow: row;
  grid-gap: 24px;
  justify-items: center;
  margin: auto;
  @media (min-width: 500px) {
    grid-auto-flow: column;
  }
`;
export const A = styled.a`
  color: white;
  text-decoration: none;
  box-shadow: inset 0 -1px 0 hsla(0, 0%, 100%, 0.4);
  :hover {
    box-shadow: inset 0 -1.2em 0 hsla(0, 0%, 100%, 0.4);
  }
`;
export const Li = styled.li`
  :last-child {
    grid-column: 1 / 2;
    grid-row: 1 / 2;
  }
  :hover ~ li p {
    animation: wave-animation 0.3s infinite;
  }
`;
export const Div = styled.div`
  display: flex;
  height: 60px;
  width: 100%;
  background-color: #2c3034 !important;
  line-height: 1.3;
  font-family: Raleway, sans-serif;
  text-transform: lowercase;
  letter-spacing: 10px;
`;
export const BellButton = styled.div`
  padding: 10px;
  background-color: #2c3034 !important;
  cursor: pointer;
  &:hover {
    background-color: #212529;
  }
`;
export const UserProfileWrapper = styled.div`
  background-color: #2c3034 !important;
  border-right: 2px solid #2c3034 !important;
  border-left: 2px solid #2c3034 !important;
`;
export const CardBootstrap = styled.div`
  background-color: #2c3034 !important;
  position: relative;
  height: 100%;

  padding-top: 7px !important;
  padding-bottom: 8px !important;

  &:hover {
    background-color: #212529;
  }
`;
export const NameUserProfile = styled.h4`
  color: #c5c9cc !important;
  text-decoration: none;
  font-size: 1.4vw;
  padding-right: 15px !important;
  padding-left: 8px;
`;

type TokenFunc = (str: string) => void;

interface Props {
  token: string;
  setToken: TokenFunc;
}

export const MainMenu: React.FC<Props> = ({ token, setToken }) => {
  const role = localStorage.getItem("role");
  return (
    <Navbar expand="lg" sticky="top">
      <Container>
        <Navbar.Brand>
          <Link to="/">
            <img src={logo} alt="Logo" height="50" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {role !== "teacher" ? (
              <NavDropdown
                title={<span className={"text-light"}>Треки</span>}
                id="basic-nav-dropdown"
              >
                <IndexLinkContainer to={"/tracks"}>
                  <NavDropdown.Item>Каталог</NavDropdown.Item>
                </IndexLinkContainer>
                <IndexLinkContainer to={"/tracks/my"}>
                  <NavDropdown.Item>Мои треки</NavDropdown.Item>
                </IndexLinkContainer>
              </NavDropdown>
            ) : (
              <IndexLinkContainer to={"/tracks"}>
                <Div><UL><Li><A>Каталог<br />треков</A></Li></UL></Div>
              </IndexLinkContainer>
            )}
          </Nav>
          <div className="d-flex align-items-center userCardBell">
            <UserCard token={token} setToken={setToken} />
            <Bell />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};


