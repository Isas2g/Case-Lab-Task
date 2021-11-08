import React, { FC } from "react";
import "bootstrap/dist/js/bootstrap.bundle";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import logo from "../../../assets/banner-white.png";
import { UserCard } from "./subcomponents/UserCard";
import { Bell } from "./subcomponents/Bell";
import { IndexLinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import { BsChevronDown } from "react-icons/bs";
import styled from "styled-components";
import { TokenInterface } from "./interfaces";
import "src/shared/styles/style.css";

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

export const MainMenu: FC<TokenInterface> = ({ token, setToken }) => {
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
              <NavDropdown title={<span className={"text-light"}>Треки<BsChevronDown /></span>} id="basic-nav-dropdown">
                <IndexLinkContainer to={"/tracks"}>
                  <NavDropdown.Item className={""}>Каталог</NavDropdown.Item>
                </IndexLinkContainer>
                <IndexLinkContainer to={"/tracks/my"} className={"shadow"}>
                  <NavDropdown.Item>Мои треки</NavDropdown.Item>
                </IndexLinkContainer>
              </NavDropdown>
            ) : (
              <IndexLinkContainer to={"/tracks"}><button className="btn fourth">Каталог треков</button></IndexLinkContainer>
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


