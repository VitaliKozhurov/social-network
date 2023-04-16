import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import App from './App';

const userPosts = {
    name: 'Kozhurou Vitali',
    posts: [
        {
            id: 1,
            message: 'Hello my friend! How are you?',
            likeCount: 5,
        },
        {
            id: 2,
            message: 'Hi I\'m stady in It-incubator. It\'s the best community in the world)',
            likeCount: 12
        }
    ]
}
const dialogsInfo = [
    {
        userId: 1,
        userName: 'Dimych',
        userMessages: ['Hello Im Dimych. I love React', 'I want to teach you React and JavaScript I want to teach you React and JavaScript I want to teach you React and JavaScript I want to teach you React and JavaScript I want to teach you React and JavaScript I want to teach you React and JavaScript'],
    },
    {
        userId: 2,
        userName: 'Viktor',
        userMessages: ['Hello Im Viktor. I love native JS'],
    },
];

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <BrowserRouter>
        <App userPosts={userPosts} dialogsInfo={dialogsInfo}/>
    </BrowserRouter>
);