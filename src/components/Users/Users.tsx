import React, {FC} from 'react';
import {UserPageType} from '../../appTypes/types';
import s from './Users.module.css'

type UsersPropsType = {
    users: Array<UserPageType>
    followUser: (userID: number) => void
    unfollowUser: (userID: number) => void
    setUsers: (users: Array<UserPageType>) => void
}

export const Users: FC<UsersPropsType> = ({users, followUser, unfollowUser, setUsers}) => {
    !users.length && setUsers([
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
    ])


    const usersList = users.map(user => {
        const onFollowButtonHandler = () => {
            user.followed && unfollowUser(user.id);
            !user.followed && followUser(user.id);
        }

        return (
            <div key={user.id}>
                <h3>{user.fullName}</h3>
                <div className={s.avatar}>
                    <img src={user.photoUrl} alt="Avatar" />
                </div>
                <p>{user.status}</p>
                <p>Страна: {user.location.country}</p>
                <p>Город: {user.location.city}</p>
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