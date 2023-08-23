import React from 'react';
import inProgress from '../../assets/image/inProgress.png'
import s from './InProgress.module.css'

export const InProgress = () => {
    return (
        <>
            <h2 className={s.message}>Dear User, <br/>
                Thank you for visiting our page. We are currently in the process of developing this website. We are
                working hard to create a fully functional and high-quality page that meets your expectations.</h2>
            <div className={s.bg}>
                <img src={inProgress} alt="Work on site page" />
            </div>
        </>
    )
};