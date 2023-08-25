import React from 'react';
import {Link, useNavigate } from 'react-router-dom';
import style from './NotFoundPage.module.css';
import notFoundImage from'../../assets/image/404.svg';

export const NotFoundPage = () => {
    const navigate = useNavigate();
    return (
        <div className={style.body}>
            <div className={style.links}>
                <button className={style.backButton} onClick={() => navigate(-2)}>
                    Back
                </button>
                <Link to={'/profile'} className={style.link}>
                    Go to profile
                </Link>
            </div>
            <div className={style.image}>
                <img src={notFoundImage} alt="Not found page" />
            </div>
            <h1 className={style.message}>Ooops, page not found 😢</h1>
        </div>
    );
}
