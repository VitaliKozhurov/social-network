import axios from 'axios';

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
                /*return appAxiosInstance
            .get(`profile/${paramsID ? paramsID : userID}`)
            .then((response) => response.data);*/
        const profilePromise = appAxiosInstance
            .get(`profile/${paramsID ? paramsID : userID}`)
            .then((response) => response.data);
        const statusPromise = appAxiosInstance
            .get(`profile/status/${paramsID ? paramsID : userID}`)
            .then((response) => response.data);

        return Promise.all([profilePromise, statusPromise])
    },
};
