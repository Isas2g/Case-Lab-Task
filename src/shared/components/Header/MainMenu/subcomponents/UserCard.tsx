// import {Card} from "react-bootstrap";
import avatar from "../../../../assets/user-icon.png";
import {Link} from "react-router-dom";
import React from "react";
import {useHistory} from "react-router";
import {UserProfileWrapper, CardBootstrap, NameUserProfile} from "../style"


type TokenFunc = (str: string) => void;

interface Props {
    token: string;
    setToken: TokenFunc;
}

export const UserCard: React.FC<Props> = ({token, setToken}) => {
    const history = useHistory();

    const leave = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("role");

        setToken("");
        history.push("/login");
    }

    return(
        <UserProfileWrapper className="d-flex align-items-center userProfileWrapper">
            <CardBootstrap className="p-1 CardBootstrap">
                <span className="dropdown aCard" id="profileScrollingDropdown" role="button"
                   data-bs-toggle="dropdown" aria-expanded="false">
                    <div className="d-flex align-items-center">
                        <div className="image">
                            <img className="m-1 rounded" height="40" width="40" src={avatar} alt="User's Avatar" />
                        </div>
                        <div className="ml-3 w-100">
                            <NameUserProfile className="mb-0 mt-0 NameUserProfile">{localStorage.getItem("role") === "teacher" ? "Учитель" : "Ученик"}</NameUserProfile>
                        </div>
                    </div>
                </span>
                <ul className="dropdown-menu shadow" aria-labelledby="profileScrollingDropdown">
                    <li>
                        <Link to="/profile" className="dropdown-item">Мой профиль</Link>
                    </li>
                    <li>
                        <hr className="dropdown-divider" />
                    </li>
                    <li>
                        <span className="dropdown-item" onClick={leave}>Выйти из аккаунта</span>
                    </li>
                </ul>
            </CardBootstrap>
        </UserProfileWrapper>
    )
}