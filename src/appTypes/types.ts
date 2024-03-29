// Posts Page
export type PostType = {
    id: number;
    message: string;
    likeCount: number;
};

// Messages Page
export type UserType = {
    userId: string;
    userName: string;
};
export type MessagesType = {
    owner: string;
    message: string;
};

// Users Page
export type UserPageType = {
    id: number;
    name: string;
    status: string;
    photos: {
        small: null | string;
        large: null | string;
    };
    followed: boolean;
    location: {
        city: string;
        country: string;
    };
};

// Profile Page

export type UserProfileType = {
    aboutMe: null | string;
    userId: number;
    lookingForAJob: boolean;
    lookingForAJobDescription: string;
    fullName: string;
    contacts: ContactsProfileType;
    photos: {
        small: null | string;
        large: null | string;
    };
    small: string;
};

type ContactsProfileType = {
    [key: string]: string
};

// actions creators object types

type ReducerActionType<T> = T extends { [key: string]: infer U }
    ? U
    : never;

export type InferActionsType<
    T extends { [key: string]: (...args: Array<any>) => any }
> = ReturnType<ReducerActionType<T>>;
