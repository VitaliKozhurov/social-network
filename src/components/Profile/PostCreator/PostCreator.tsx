import React from "react";
import s from "./PostCreator.module.css";

export const PostCreator = () => {
    return (
        <>
            <div className={s.myPostBody}>
                <h2 className={s.title}>My new post</h2>
                <div className={s.postForm}>
                    <textarea
                        className={s.postText}
                        placeholder={"Enter you message post"}
                    />
                    <button className={s.btn}>Add post</button>
                </div>
            </div>
        </>
    );
};
