import { NavLink } from "react-router-dom";
import s from "./ChatSelector.module.css";

type ChatSelectorType = {
    id: string;
    name: string;
    path: string;
};

export const ChatSelector: React.FC<ChatSelectorType> = (props) => {
    return (
        <div className={s.user} key={props.id}>
            <NavLink
                to={props.path}
                className={({ isActive }) =>
                    isActive ? s.link + " " + s.active : s.link
                }
            >
                {props.name}
            </NavLink>
        </div>
    );
};
