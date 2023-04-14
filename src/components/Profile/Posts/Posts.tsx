import { Post } from "../../UI/Post/Post";
import s from "./Posts.module.css";

export const Posts = () => {
    return (
        <div className={s.postsBody}>
            <Post
                name={"Alex"}
                message={"Hello my friend! How are you?"}
                isLike={true}
            />
            <Post
                name={"Vitalik"}
                message={`Hi I'm stady in It-incubator. It's the best community in the world))`}
                isLike={true}
            />
        </div>
    );
};
