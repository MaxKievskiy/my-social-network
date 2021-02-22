import React from "react";
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <header className={s.header}>
            <div>

            <img
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Coat_of_arms_of_Ramat_Gan.svg/1200px-Coat_of_arms_of_Ramat_Gan.svg.png'/>
            </div>
           <NavLink to={'profile/auth/me'}>Login</NavLink>
        </header>

    )
}
export default Header;