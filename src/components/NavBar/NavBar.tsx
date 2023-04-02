import React from 'react';
import s from './NavBar.module.css';

export const NavBar = () => {
    return (
        <nav className={s.nav}>
            <ul>
                <li><a>Profile</a></li>
                <li><a>Message</a></li>
                <li><a>News</a></li>
                <li><a>Music</a></li>
                <li><a>Settings</a></li>
            </ul>
        </nav>
    )
};