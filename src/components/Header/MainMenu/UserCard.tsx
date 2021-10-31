import {Card} from "react-bootstrap";
import avatar from "../../../shared/assets/user-icon.png";
import {Link} from "react-router-dom";
import bell from "../../../shared/assets/notification-icon.png";
import React from "react";
import {useHistory} from "react-router";

type TokenFunc = (str: string) => void;

interface Props {
    token: string;
    setToken: TokenFunc;
}

export const UserCard: React.FC<Props> = ({token, setToken}) => {
    const history = useHistory();

    const leave = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('role');

        setToken('');
        history.push('/login');
    }

    return(
        <div className="d-flex align-items-center">
            <Card className="p-1">
                <a className="dropdown" id="profileScrollingDropdown" role="button"
                   data-bs-toggle="dropdown" aria-expanded="false">
                    <div className="d-flex align-items-center">
                        <div className="image">
                            <img className="m-1 rounded" height="40" width="40" src={avatar} alt="User's Avatar" />
                        </div>
                        <div className="ml-3 w-100">
                            <h4 className="mb-0 mt-0">[Имя пользователя]</h4>
                        </div>
                    </div>
                </a>
                <ul className="dropdown-menu" aria-labelledby="profileScrollingDropdown">
                    <li>
                        <Link to="/profile" className="dropdown-item">Мой профиль</Link>
                    </li>
                    <li>
                        <a className="dropdown-item" href="#">Another action</a>
                    </li>
                    <li>
                        <hr className="dropdown-divider" />
                    </li>
                    <li>
                        <a className="dropdown-item" onClick={leave}>Выйти из аккаунта</a>
                    </li>
                </ul>
            </Card>
        </div>
    )
}