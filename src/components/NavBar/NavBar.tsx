import React, {useState} from 'react';
import s from './NavBar.module.css';
import {NavLink} from 'react-router-dom';
import profile from '../../assets/image/profile.svg';
import message from '../../assets/image/message.svg';
import users from '../../assets/image/users.svg';
import news from '../../assets/image/news.svg';
import music from '../../assets/image/music.svg';
import settings from '../../assets/image/settings.svg';

// NavLink отслеживает активное состояниее ссылки, удобно в том случае если необходимо отслеживать
// активное состояние ссылки, для этого из объекта, который нам дает NavLink достаем параметр isActive
// Link просто для изменения адреса URL
type LinkType = {
    id: number;
    url: string;
    title: string;
    icon: string;
};

const initLinkList = [
    {id: 1, url: '/profile', title: 'Profile', icon: profile},
    {id: 2, url: '/message', title: 'Message', icon: message},
    {id: 3, url: '/users', title: 'Users', icon: users},
    {id: 4, url: '/news', title: 'News', icon: news},
    {id: 5, url: '/music', title: 'Music', icon: music},
    // {id: 6, url: '/settings', title: 'Settings', icon: settings},
];

export const NavBar: React.FC = () => {
    const [linkState, setLinkState] = useState<Array<LinkType>>(initLinkList);

    return (
        <nav className={s.nav}>
            <ul className={s.list}>
                {linkState.map((item) => (
                    <li key={item.id} className={s.item}>
                        <NavLink
                            to={item.url}
                            className={({isActive}) =>
                                isActive ? s.link + ' ' + s.active : s.link
                            }
                        >
                            {
                                <>
                                    <span className={s.icon}>
                                        <img src={item.icon} alt="Icon" />
                                    </span>
                                    <span>{item.title}</span>
                                </>
                            }
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
};
