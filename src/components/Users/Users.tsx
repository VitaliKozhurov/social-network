import React, {FC} from 'react';
import {UserPageType} from '../../appTypes/types';
import s from './Users.module.css';
import avatar from '../../assets/image/userWithoutAvatar.webp';
import axios from 'axios';

type UsersPropsType = {
    users: Array<UserPageType>
    followUser: (userID: number) => void
    unfollowUser: (userID: number) => void
    setUsers: (users: Array<UserPageType>) => void
}

export const Users: FC<UsersPropsType> = ({users, followUser, unfollowUser, setUsers}) => {
    /*!users.length && setUsers([
        {
            id: 1,
            photoUrl: 'https://img.freepik.com/premium-vector/silhouette-japanese-samurai-warrior-with-sword-standing-sunset-art-print_194708-1868.jpg?w=2000',
            fullName: 'Vitali Kozhurou',
            status: 'Open to work',
            followed: true,
            location: {
                city: 'Minsk',
                country: 'Belarus'
            },
        },
        {
            id: 2,
            photoUrl: 'https://img.freepik.com/premium-vector/silhouette-japanese-samurai-warrior-with-sword-standing-sunset-art-print_194708-1868.jpg?w=2000',
            fullName: 'Max Roslow',
            status: 'I am work now',
            followed: false,
            location: {
                city: 'Moscow',
                country: 'Russia'
            },
        },
        {
            id: 3,
            photoUrl: 'https://img.freepik.com/premium-vector/silhouette-japanese-samurai-warrior-with-sword-standing-sunset-art-print_194708-1868.jpg?w=2000',
            fullName: 'Ivan Petrov',
            status: 'I am relocate',
            followed: true,
            location: {
                city: 'Kiev',
                country: 'Ukraine'
            },
        }
    ])*/
    if (!users.length) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => setUsers(response.data.items))
    }


    const usersList = users.map(user => {
        const onFollowButtonHandler = () => {
            user.followed && unfollowUser(user.id);
            !user.followed && followUser(user.id);
        }

        return (
            <div key={user.id}>
                <h3>{user.name}</h3>
                <div className={s.avatar}>
                    {user.photos.small? <img src={user.photos.small} alt="Avatar" />:<img src={avatar} alt="Avatar" />}
                </div>
                <p>{user.status}</p>
                <button onClick={onFollowButtonHandler}>{user.followed ? 'Unfollow' : 'Follow'}</button>
            </div>
        )
    })

    return (
        <>
            <h2>Users list</h2>
            {usersList}
        </>
    )
};