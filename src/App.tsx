import React from 'react';
import './App.css';
import {Header, NavBar, Profile, Dialogs, Footer} from './components';
import {Route, Routes} from 'react-router-dom';
import {EmptyChat} from './components/UI/EmptyChat/EmptyChat';
import {Chat} from './components/Dialogs/Chat/Chat';
import {changeText} from './redux/state';


type StatePropsType = {
    state: AppPropsType;
    addPost: () => void
    changeText:(value:string)=>void
};

export type AppPropsType = {
    postsPage: PostsPageType;
    dialogsPage: DialogsPageType;
};

export type PostType = {
    id: number;
    message: string;
    likeCount: number;
};

export type PostsType = Array<PostType>;

export type PostsPageType = {
    posts: PostsType;
    newPostText:string
};

export type DialogType = {
    userId: number;
    userName: string;
};

export type DialogsType = Array<DialogType>;

export type MessagesType = {
    [key: string]: Array<string>;
};

export type DialogsPageType = {
    dialogs: DialogsType;
    messages: MessagesType;
};

const App: React.FC<StatePropsType> = ({state, addPost, changeText}) => {
    const {postsPage, dialogsPage} = state;

    return (
        <div className="App">
            <Header />
            <div className="mainContent container">
                <NavBar />
                <main className="content">
                    <Routes>
                        <Route path="/" element={<Profile data={postsPage} addPost={addPost} changeText={changeText} />} />
                        <Route path="/message" element={<Dialogs users={dialogsPage.dialogs} />}>
                            <Route index element={<EmptyChat />} />
                            <Route path={':id'} element={<Chat messages={dialogsPage} addPost={addPost} changeText={changeText} />} />
                        </Route>
                    </Routes>
                </main>
            </div>
            <Footer />
        </div>
    );
};

export default App;
