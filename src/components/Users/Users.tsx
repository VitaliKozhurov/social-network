import React, { FC } from "react";
import { UserCard } from "./UserCard/UserCard";
import { UserPageType } from "../../appTypes/types";
import s from "./Users.module.css";
import { Pagination } from "../Pagination/Pagination";
import axios from "axios";
import { followAPI } from "../../api/api";

type UsersPropsType = {
    users: Array<UserPageType>;
    totalUsersCount: number;
    pageSize: number;
    currentPage: number;
    onPageChange: (page: number) => void;
    followUser: (userID: number) => void;
    unfollowUser: (userID: number) => void;
};

export const Users: FC<UsersPropsType> = ({
    users,
    totalUsersCount,
    pageSize,
    currentPage,
    onPageChange,
    followUser,
    unfollowUser,
}) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pageArr = [];
    for (let i = 1; i <= pagesCount; i++) {
        pageArr.push(i);
    }

    const usersList = users.map((user) => {
        const onFollowButtonHandler = () => {
            if (!user.followed) {
                followAPI.setFollow(user.id).then((data) => {
                    if (data.resultCode === 0) {
                        followUser(user.id);
                    }
                });
            } else {
                followAPI.setUnFollow(user.id).then((data) => {
                    if (data.resultCode === 0) {
                        unfollowUser(user.id);
                    }
                });
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
                pageArray={pageArr}
                onPageChange={onPageChange}
            />
        </>
    );
};
