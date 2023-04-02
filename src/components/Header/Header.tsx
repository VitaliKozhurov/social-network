import React from 'react';
import s from './Header.module.css';
import logo from '../../assets/image/logo.svg';

export const Header = () => {
    return (
        <header className={s.header}>
            <img src={logo} alt="Logo" />
            <h2>Header</h2>
        </header>
    )
};