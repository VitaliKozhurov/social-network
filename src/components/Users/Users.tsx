import React from "react";
import { UserPageType } from "../../appTypes/types";
import s from "./Users.module.css";
import avatar from "../../assets/image/samurai-user.png";
import axios from "axios";
import { Pagination } from "../Pagination/Pagination";

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
                <div key={user.id}>
                    <h3>{user.name}</h3>
                    <div className={s.avatar}>
                        {user.photos.small ? (
                            <img src={user.photos.small} alt="Avatar" />
                        ) : (
                            <img src={avatar} alt="Avatar" />
                        )}
                    </div>
                    <p>{user.status}</p>
                    <button onClick={onFollowButtonHandler}>
                        {user.followed ? "Unfollow" : "Follow"}
                    </button>
                </div>
            );
        });

        let pagesCount = Math.ceil(totalUsersCount / pageSize);
        let pageArr = [];
        for (let i = 1; i <= pagesCount; i++) {
            pageArr.push(i);
        }
        return (
            <>
                <h2>Users list</h2>
                {usersList}
                <div>Pages count: {pagesCount}</div>
                <div>
                    {pageArr.map((elem) => (
                        <span
                            key={elem}
                            onClick={() => {
                                this.onPageChange(elem);
                            }}
                        >
                            {elem}
                        </span>
                    ))}
                </div>
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
