import React from "react";
import s from './Header.module.css';
import {NavLink} from "react-router-dom";


const Header = ({isAuth, login, logout}) => {
    return (
        <header className={s.header}>
            <img
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Coat_of_arms_of_Ramat_Gan.svg/1200px-Coat_of_arms_of_Ramat_Gan.svg.png'/>
            <div className={s.loginBlock}>
                {isAuth ? <div>{login}
                    <button onClick={logout}>Log out</button>
                </div> : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
}
export default Header;