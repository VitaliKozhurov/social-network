import { AppStateType } from "./redux-store"
import {UserPageType} from 'appTypes/types';
import {createSelector} from 'reselect';


export const getUsers = (state:AppStateType):Array<UserPageType> => state.usersPage.users
export const getUsersSelector = createSelector(getUsers, (users)=>{
    return users
})

export const getPageSize = (state:AppStateType):number=>state.usersPage.pageSize

export const getTotalUsersCount = (state:AppStateType):number=>state.usersPage.totalUsersCount

export const getCurrentPage = (state:AppStateType):number=>state.usersPage.currentPage

export const getIsFetchingStatus = (state:AppStateType):boolean=>state.usersPage.isFetching

export const getFollowingProgressStatus = (state:AppStateType):Array<number>=>state.usersPage.followingInProgress