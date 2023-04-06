import React from 'react';
import s from './NavBar.module.css';
import { Link } from 'react-router-dom';

export const NavBar = () => {
    return (
        <nav className={s.nav}>
            <ul className={s.list}>
                <li className={s.item}><Link to='/'>Profile</Link></li>
                <li className={s.item}><Link to='/message'>Message</Link></li>
                <li className={s.item}><Link to='/news'>News</Link></li>
                <li className={s.item}><Link to='/music'>Music</Link></li>
                <li className={s.item}><Link to='/settings'>Settings</Link></li>
            </ul>
        </nav>
    )
};