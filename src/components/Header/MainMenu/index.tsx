import React from 'react';
import { Link } from 'react-router-dom';

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
                <div className="notifications">
                    <img width="40" src={notificationIcon} alt="" />
                </div>
                <div>
                    <img className="m-1"  width="40" src={userIcon} alt="" />
                    <Link to="/profile">Иван Иванов</Link>
                </div>
            </div>
        </div>
    )
};