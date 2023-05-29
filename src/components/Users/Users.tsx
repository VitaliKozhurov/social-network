import React, {FC} from 'react';
import {UserCard} from './UserCard/UserCard';
import {UserPageType} from '../../appTypes/types';
import s from './Users.module.css';
import {Pagination} from '../Pagination/Pagination';

type UsersPropsType = {
    users: Array<UserPageType>
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChange: (page: number) => void
    followUser: (userID: number) => void
    unfollowUser: (userID: number) => void
}

export const Users: FC<UsersPropsType> = ({
                                              users,
                                              totalUsersCount,
                                              pageSize,
                                              currentPage,
                                              onPageChange,
                                              followUser,
                                              unfollowUser
                                          }) => {

    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pageArr = [];
    for (let i = 1; i <= pagesCount; i++) {
        pageArr.push(i);
    }

    const usersList = users.map((user) => {
        const onFollowButtonHandler = () => {
            user.followed && unfollowUser(user.id);
            !user.followed && followUser(user.id);
        };
        return (
            <UserCard
                key={user.id}
                name={user.name}
                photo={user.photos.small}
                status={user.status}
                followed={user.followed}
                onFollowButtonHandler={onFollowButtonHandler}
            />);
    });

    return (
        <>
            <div className={s.usersBody}>{usersList}</div>
            <Pagination
                currentPage={currentPage}
                paginationSize={7}
                pageArray={pageArr}
                onPageChange={onPageChange}
            />
        </>
    )
};