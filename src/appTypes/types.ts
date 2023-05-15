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

