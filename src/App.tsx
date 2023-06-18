import React from 'react';
import './App.css';
import {
    NavBar,
    Footer,
    UsersContainer,
    EmptyChat,
    DialogsContainer,
    ChatContainer,
} from './components';
import {Route, Routes} from 'react-router-dom';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import {Login} from './components/Login/Login';

const App = () => {
    return (
        <div className="App">
            <HeaderContainer />
            <div className="mainContent container">
                <NavBar />
                <main className="content">
                    <Routes>
                        <Route
                            path="/profile/:id?"
                            element={<ProfileContainer />}
                        />

                        <Route path="/message" element={<DialogsContainer />}>
                            <Route index element={<EmptyChat />} />
                            <Route path={':id'} element={<ChatContainer />} />
                        </Route>
                        <Route path="/users" element={<UsersContainer />} />
                        <Route path="/login" element={<Login />} />
                    </Routes>
                </main>
            </div>
            <Footer />
        </div>
    );
};

export default App;
