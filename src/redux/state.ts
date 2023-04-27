import {rerenderEntireTree} from '../render';

export const state = {
    postsPage: {
        posts: [
            {
                id: 1,
                message: 'Hello my friend! How are you?',
                likeCount: 5,
            },
            {
                id: 2,
                message: 'Hi I\'m study in It-incubator. It\'s the best community in the world)',
                likeCount: 12
            }
        ]
    },
    dialogsPage: {
        dialogs: [
            {
                userId: 1,
                userName: 'Dimych'
            },
            {
                userId: 2,
                userName: 'Viktor'
            },
        ],
        messages: {
            '1': ['Hello Im Dimych. I love React', 'I want to teach you React and JavaScript I want to teach you React and JavaScript I want to teach you React and JavaScript I want to teach you React and JavaScript I want to teach you React and JavaScript I want to teach you React and JavaScript'],
            '2': ['Hello Im Viktor. I love native JS']
        }
    }
}

export const addPost = (postMessage: string) => {
    const newPost = {
        id: state.postsPage.posts.length + 1,
        message: postMessage,
        likeCount: 0
    }

    state.postsPage.posts.push(newPost);
    rerenderEntireTree(state);
}