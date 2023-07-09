import React from 'react';
import s from './Header.module.css';
import logo from '../../assets/image/logo.svg';
import logIn from '../../assets/image/logIn.svg';
import logOut from '../../assets/image/logOut.svg';
import {NavLink} from 'react-router-dom';

type HeaderPropsType = {
    isAuth: boolean
    login: string
    logout: () => void
};

export const Header: React.FC<HeaderPropsType> = ({
                                                      isAuth,
                                                      login,
                                                      logout
                                                  }) => {
    const logoutHandler = () => {
        logout()
    }
    return (
        <header className={s.header}>
            <div className="container">
                <div className={s.body}>
                    <div className={s.logo}>
                        <img src={logo} alt="Logo" />
                        <h1 className={s.headerTitle}>React SN</h1>
                    </div>
                    <div className={s.loginField}>
                        {isAuth ? (
                            <>
                                <span className={s.loginLink}>{login}</span>
                                <img src={logOut} alt="Login logo" />
                                <button onClick={logoutHandler} className={s.logOut}>LogOut</button>
                            </>
                        ) : (
                            <>
                                <NavLink to={'/login'} className={s.loginLink}>
                                    LogIn
                                </NavLink>
                                <img src={logIn} alt="Login logo" />
                            </>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
};
