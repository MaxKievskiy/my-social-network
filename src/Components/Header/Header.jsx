import React from "react";
import s from './Header.module.css';

const Header = () => {
    return (
        <header className={s.header}>
            <img
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Coat_of_arms_of_Ramat_Gan.svg/1200px-Coat_of_arms_of_Ramat_Gan.svg.png'/>
        </header>
    )
}
export default Header;