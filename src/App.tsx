import React from 'react';
import './App.css';
import {Header, NavBar, Profile, Dialogs, Footer} from './components';
import {Route, Routes} from 'react-router-dom';
import { UserPostType} from './components/Profile/Posts/Posts';
import {UserChatType} from './components/Dialogs/Dialogs';

type AppPropsType = {
    userPosts:UserPostType
    dialogsInfo:Array<UserChatType>
}


const App: React.FC<AppPropsType> = ({userPosts,dialogsInfo}) => {
    return (
        <div className="App">
            <Header />
            <div className="mainContent container">
                <NavBar />
                <main className="content">
                    <Routes>
                        <Route path="/" element={<Profile userPosts={userPosts} />} />
                        <Route path="/message" element={<Dialogs usersChats={dialogsInfo} />} />
                        <Route path="/message/:id" element={<Dialogs usersChats={dialogsInfo} />} />
                    </Routes>
                </main>
            </div>
            <Footer />
        </div>
    );
};

export default App;
