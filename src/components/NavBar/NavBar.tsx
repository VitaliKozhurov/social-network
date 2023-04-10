import React, { useState } from "react";
import s from "./NavBar.module.css";
import { NavLink } from "react-router-dom";

// NavLink отслеживает активное состояниее ссылки, удобно в том случае если необходимо отслеживать
// активное состояние ссылки, для этого из объекта, который нам дает NavLink достаем параметр isActive
// Link просто для изменения адреса URL
type LinkType = {
    id: number;
    url: string;
    title: string;
};

const initLinkList = [
    { id: 1, url: "/", title: "Profile" },
    { id: 2, url: "/message", title: "Message" },
    { id: 3, url: "/news", title: "News" },
    { id: 4, url: "/music", title: "Music" },
    { id: 5, url: "/settings", title: "Settings" },
];

export const NavBar = () => {
    const [linkState, setLinkState] = useState<Array<LinkType>>(initLinkList);

    return (
        <nav className={s.nav}>
            <ul className={s.list}>
                {linkState.map((item) => (
                    <li key={item.id} className={s.item}>
                        <NavLink
                            to={item.url}
                            className={({ isActive }) =>
                                isActive ? s.link + " " + s.active : s.link
                            }
                        >
                            {item.title}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
};
