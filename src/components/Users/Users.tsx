import React from 'react';
import {UserPageType} from '../../appTypes/types';
import s from './Users.module.css';
import axios from 'axios';
import {Pagination} from '../Pagination/Pagination';
import {UserCard} from './UserCard/UserCard';

type UsersPropsType = {
    users: Array<UserPageType>;
    pageSize: number;
    totalUsersCount: number;
    currentPage: number;
    followUser: (userID: number) => void;
    unfollowUser: (userID: number) => void;
    setUsers: (users: Array<UserPageType>) => void;
    setCurrentPage: (pageID: number) => void;
    setTotalUsersCount: (count: number) => void;
};

export class Users extends React.Component<UsersPropsType> {
    componentDidMount() {
        axios
            .get(
                `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
            )
            .then((response) => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    }

    onPageChange = (pageNum: number) => {
        this.props.setCurrentPage(pageNum);
        axios
            .get(
                `https://social-network.samuraijs.com/api/1.0/users?page=${pageNum}&count=${this.props.pageSize}`
            )
            .then((response) => this.props.setUsers(response.data.items));
    };

    render() {
        const {
            users,
            pageSize,
            totalUsersCount,
            currentPage,
            followUser,
            unfollowUser,
            setCurrentPage,
        } = this.props;

        const usersList = users.map((user) => {
            const onFollowButtonHandler = () => {
                user.followed && unfollowUser(user.id);
                !user.followed && followUser(user.id);
            };

            return (
                <UserCard name={user.name} photo={user.photos.small} status={user.status} followed={user.followed}
                          onFollowButtonHandler={onFollowButtonHandler} />);
        });

        let pagesCount = Math.ceil(totalUsersCount / pageSize);
        let pageArr = [];
        for (let i = 1; i <= pagesCount; i++) {
            pageArr.push(i);
        }
        return (
            <>
                <div className={s.usersBody}>{usersList}</div>
                <Pagination
                    currentPage={currentPage}
                    paginationSize={7}
                    pageArray={pageArr}
                    onPageChange={this.onPageChange}
                />
            </>
        );
    }
}
