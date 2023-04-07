import React, {FC} from 'react';
import s from './Post.module.css';
import avatar from '../../../../assets/image/samurai-user.png';
import likeLgo from '../../../../assets/image/like.png';

type PostPropsType = {
    message: string
    name:string
    isLike:boolean
}


export const Post: FC<PostPropsType> = (props) => {
    return (
        <div className={s.postBody}>
            <div>
                <div className={s.avaUser}>
                    <img className={s.avatar} src={avatar} alt="User Avatar" />
                </div>
                <h3 className={s.name}>{props.name}</h3>
            </div>
            <p className={s.text}>{props.message}</p>
            {props.isLike&&<div className={s.like}>
                <img src={likeLgo} alt="Like logo" />
                <span className={s.count}>0</span>
            </div>}
        </div>
    )
};