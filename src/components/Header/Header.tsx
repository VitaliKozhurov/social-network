import React from "react";
import s from "./Header.module.css";
import logo from "../../assets/image/logo.svg";
import login from "../../assets/image/logIn.svg";

export const Header: React.FC = () => {
    return (
        <header className={s.header}>
            <div className="container">
                <div className={s.body}>
                    <div className={s.logo}>
                        <img src={logo} alt="Logo" />
                        <h1 className={s.headerTitle}>React SN</h1>
                    </div>
                    <div className={s.loginField}>
                        <a href="#" className={s.loginLink}>
                            LogIn
                        </a>
                        <img src={login} alt="Login logo" />
                    </div>
                </div>
            </div>
        </header>
    );
};
