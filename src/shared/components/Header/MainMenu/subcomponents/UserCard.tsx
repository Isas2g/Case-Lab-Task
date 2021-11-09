import { Link } from "react-router-dom";
import React from "react";
import { useHistory } from "react-router";
import { UserProfileWrapper, CardBootstrap } from "../index";
import styled from "styled-components";
import { TokenInterface } from "../interfaces";

export const NameUserProfile = styled.div`
  font-family: "Open Sans", sans-serif;
  width: 100%;
  background-color: #2c3034 !important;
  line-height: 1.3;
  text-decoration: none;
  padding-right: 15px !important;
  padding-left: 8px;
`;

export const UserCard: React.FC<TokenInterface> = ({ setToken }) => {
  const history = useHistory();

  const leave = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");

    setToken("");
    history.push("/login");
  };

  return (
    <UserProfileWrapper className="d-flex align-items-center userProfileWrapper">
      <CardBootstrap className="p-1 CardBootstrap">
        <span
          className="dropdown aCard"
          id="profileScrollingDropdown"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <div className="d-flex align-items-center">
            <div className="image">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                className="feather feather-user"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>
            <div className="ml-3 w-100">
              <NameUserProfile className="mb-0 mt-0 NameUserProfile">
                {localStorage.getItem("role") === "teacher" ? "Учитель" : "Ученик"}
              </NameUserProfile>
            </div>
          </div>
        </span>
        <ul className="dropdown-menu dropdown-menu-dark shadow" aria-labelledby="profileScrollingDropdown">
          <li>
            <Link to="/profile" className="dropdown-item userItemTop">
              Мой профиль
            </Link>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <span className="dropdown-item userItemButtom" onClick={leave}>
              Выйти из аккаунта
            </span>
          </li>
        </ul>
      </CardBootstrap>
    </UserProfileWrapper>
  );
};
