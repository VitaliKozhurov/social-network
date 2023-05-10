import { NavLink } from "react-router-dom";
import s from "./ChatSelector.module.css";
import { UserType } from "../../../redux/state";

export type ChatSelectorPropsType = {
    users: Array<UserType>;
};

export const ChatSelector: React.FC<ChatSelectorPropsType> = ({ users }) => {
    const usersList = users.map((user) => {
        const path = `/message/${user.userId}`;
        return (
            <div className={s.user} key={user.userId}>
                <NavLink
                    to={path}
                    className={({ isActive }) =>
                        isActive ? s.link + " " + s.active : s.link
                    }
                >
                    {user.userName}
                </NavLink>
            </div>
        );
    });

    return (
        <div className={s.users}>
            <h2>Chat with users:</h2>
            {usersList}
        </div>
    );
};
