import React, {FC} from 'react';
import s from './Post.module.css';
import likeLgo from '../../../assets/image/like.png';
import comment from '../../../assets/image/message.png';

type PostPropsType = {
    message: string
    name: string
    likeCount:number
};

export const Post: FC<PostPropsType> = ({message, name, likeCount}) => {
    const shortName = name.split(' ').map(w=>w[0]).reverse().join('');
    const longName = name.split(' ').reverse().join('');

    return (
        <div className={s.postBody}>
            <div className={s.header}>
                <div className={s.userinfo}>
                    <div className={s.avaUser}>
                        {shortName}
                    </div>
                    <div>
                        <h3 className={s.name}>{longName}</h3>
                        <p>{'@' + longName}</p>
                    </div>
                </div>
                <button className={s.followBtn}>Follow</button>
            </div>
            <p className={s.text}>{message}</p>
            <div>
                <div className={s.like}>
                    <img src={likeLgo} alt="Like logo" />
                    {likeCount===0?null:<span className={s.count}>{likeCount}</span>}
                </div>
                <div className={s.like}>
                    <img src={comment} alt="Comment" />
                    <span className={s.count}>Comment</span>
                </div>
            </div>
        </div>
    );
};
