import { Post } from "../../UI/Post/Post";
import { UserType } from "../Dialogs";
import s from "./Chat.module.css";

type ChatPropsType = {
    users: Array<UserType>;
    id: number;
};

export const Chat: React.FC<ChatPropsType> = ({ users, id }) => {
    const noMessage = <div>Chose your friend to talk</div>;
    return (
        <div className={s.messages}>
            {id ? (
                <Post
                    name={users[id - 1].userName}
                    message={users[id - 1].userMessages}
                    isLike={false}
                />
            ) : (
                noMessage
            )}

            {/*             <Post
                name={users[id - 1].userName}
                message={users[id - 1].userMessages}
                isLike={false}
            /> */}
        </div>
    );
};
