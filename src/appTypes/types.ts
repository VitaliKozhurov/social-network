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
    id: number
    photoUrl:string
    fullName: string
    status: string
    followed:boolean
    location:{
        city:string
        country:string
    },
}

