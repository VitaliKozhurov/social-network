import axios from 'axios';
import {UserProfileType} from '../appTypes/types';

const appAxiosInstance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '666961d3-813a-4e95-8a4c-826ad914b957',
    },
});

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return appAxiosInstance
            .get(`users?page=${currentPage}&count=${pageSize}`)
            .then((response) => response.data);
    },
};

export const authAPI = {
    setAuth() {
        return appAxiosInstance
            .get(`auth/me`)
            .then((response) => response.data);
    },
    login(email: string, password: string, rememberMe: boolean = false) {
        return appAxiosInstance
            .post(`auth/login`, {email, password, rememberMe})
            .then((response) => response.data)
    },
    logout() {
        return appAxiosInstance
            .delete(`auth/login`)
            .then((response) => response.data)
    }
};

export const followAPI = {
    setFollow(userID: number) {
        return appAxiosInstance
            .post(`follow/${userID}`)
            .then((response) => response.data);
    },
    setUnFollow(userID: number) {
        return appAxiosInstance
            .delete(`follow/${userID}`)
            .then((response) => response.data);
    },
};

export const profileAPI = {
    getProfile(paramsID: string | undefined, userID: number) {
        return appAxiosInstance
            .get(`profile/${paramsID ? paramsID : userID}`)
            .then((response) => response.data);

    },
    getStatus(paramsID: string | undefined, userID: number) {
        return appAxiosInstance
            .get(`profile/status/${paramsID ? paramsID : userID}`)
            .then((response) => response.data);
    },
    updateUserStatus(status: string) {
        return appAxiosInstance
            .put(`profile/status`, {status})
            .then((response) => response.data);
    },
    savePhoto(photoFile: File) {
        const formData = new FormData();
        formData.append('image', photoFile)
        return appAxiosInstance.put('profile/photo', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(response => response.data)
    },
    updateUserInfo(info: UserProfileType) {
        return appAxiosInstance
            .put('profile', info)
            .then(response => response.data)
    }
};
