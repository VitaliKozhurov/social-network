import React, {FC} from 'react';
import {UserCard} from './UserCard/UserCard';
import {UserPageType} from 'appTypes/types';
import s from './Users.module.css';
import {Pagination} from '../Pagination/Pagination';

type UsersPropsType = {
    users: Array<UserPageType>;
    totalUsersCount: number;
    pageSize: number;
    currentPage: number;
    followingInProgress: Array<number>;
    onPageChange: (page: number) => void;
    followUser: (userID: number) => void;
    unFollowUser: (userID: number) => void;
};

export const Users: FC<UsersPropsType> = ({
                                              users,
                                              totalUsersCount,
                                              pageSize,
                                              currentPage,
                                              followingInProgress,
                                              onPageChange,
                                              followUser,
                                              unFollowUser,
                                          }) => {
    const usersList = users.map((user) => {
        const onFollowButtonHandler = () => {
            if (!user.followed) {
                followUser(user.id)
            } else {
                unFollowUser(user.id)
            }
        };
        return (
            <UserCard
                key={user.id}
                userID={user.id}
                name={user.name}
                photo={user.photos.small}
                status={user.status}
                followed={user.followed}
                disabledBtn={followingInProgress.includes(user.id)}
                onFollowButtonHandler={onFollowButtonHandler}
            />
        );
    });

    return (
        <>
            <div className={s.usersBody}>{usersList}</div>
            <Pagination
                currentPage={currentPage}
                paginationSize={7}
                pagesCount={Math.ceil(totalUsersCount / pageSize)}
                onPageChange={onPageChange}
            />
        </>
    );
};
