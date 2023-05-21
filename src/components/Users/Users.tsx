import React from 'react';
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

export class Users extends React.Component<UsersPropsType> {

    constructor(props: UsersPropsType) {
        super(props);
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => this.props.setUsers(response.data.items))
    }

    render() {
        const {users, followUser, unfollowUser} = this.props;
        const usersList = users.map(user => {
            const onFollowButtonHandler = () => {
                user.followed && unfollowUser(user.id);
                !user.followed && followUser(user.id);
            }

            return (
                <div key={user.id}>
                    <h3>{user.name}</h3>
                    <div className={s.avatar}>
                        {user.photos.small ? <img src={user.photos.small} alt="Avatar" /> :
                            <img src={avatar} alt="Avatar" />}
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
    }
}