import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.bundle';
import notificationIcon from './notification-icon.png';
import userIcon from './user-icon.png';

export const MainMenu = () => {
    return (
        <div className="d-flex justify-content-between align-items-center w-75" >
            <nav className="nav">
                <Link to='/'><p className="nav-link">Главная страница</p></Link>
                <Link to='/tracks'><p className="nav-link">Треки</p></Link>
                <Link to='/tracks'><p className="nav-link">Каталог</p></Link>
            </nav>
            <div className="d-flex justify-content-between align-items-center">
                <div className="card p-3">
                    <a className="link-unstyled dropdown" href="#" id="profileScrollingDropdown" role="button"
                       data-bs-toggle="dropdown" aria-expanded="false">
                        <div className="d-flex align-items-center">
                            <div className="image">
                                <img className="m-1 rounded" height="40" width="40" src={userIcon} alt="User's Avatar" />
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
                            <a className="dropdown-item" href="#">Something else here</a>
                        </li>
                    </ul>
                </div>
                <div className="notifications" style={{marginLeft: 40,}}>
                    <img width="40" src={notificationIcon} alt="Notification Bell" />
                </div>
            </div>
        </div>
    )
};