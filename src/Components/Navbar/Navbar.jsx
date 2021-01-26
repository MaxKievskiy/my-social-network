import React from "react";
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";


const Navbar = (props) => {
    // let bestFriendsElement = props.state.sideBar.map((bestFriend) => <div name={bestFriend.name} id={bestFriend.id}/>)
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to='/profile' activeClassName={s.activeLink}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/dialogs' activeClassName={s.activeLink}>Message</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/news' activeClassName={s.activeLink}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='music' activeClassName={s.activeLink}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/settings' activeClassName={s.activeLink}>Settings</NavLink>
            </div>
            {/*<div className={s.item}>*/}
            {/*    <h3>Friends</h3>*/}
            {/*    {bestFriendsElement}*/}
            {/*</div>*/}
        </nav>
    )
}
export default Navbar;